import React, { useState, useEffect, useCallback } from "react";
import { ArrowRightLeft, Bitcoin, DollarSign, Clock, TrendingUp, TrendingDown, RefreshCw, ChevronRight, Activity, Shield, Zap, Globe, Sparkles } from "lucide-react";

const ConverterSection = () => {
  const [btcAmount, setBtcAmount] = useState("1");
  const [usdAmount, setUsdAmount] = useState("0");
  const [btcPrice, setBtcPrice] = useState(106047);
  const [previousPrice, setPreviousPrice] = useState(106047);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);
  const [conversionHistory, setConversionHistory] = useState([]);
  const [marketData, setMarketData] = useState({
    change24h: 0,
    high24h: 0,
    low24h: 0,
    volume: 0,
    marketCap: 0,
  });

  // Fetch real-time BTC price with market data
  const fetchBTCPrice = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Using CoinGecko API
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true"
      );
      
      if (!response.ok) throw new Error("Failed to fetch data");
      
      const data = await response.json();
      
      if (data.bitcoin) {
        const newPrice = data.bitcoin.usd;
        setPreviousPrice(btcPrice);
        setBtcPrice(newPrice);
        setLastUpdated(new Date());
        
        if (btcAmount) {
          setUsdAmount((parseFloat(btcAmount) * newPrice).toFixed(2));
        }
      }
      
      // Fetch additional market data
      const marketResponse = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin"
      );
      const marketDataRes = await marketResponse.json();
      
      if (marketDataRes.market_data) {
        setMarketData({
          change24h: marketDataRes.market_data.price_change_percentage_24h,
          high24h: marketDataRes.market_data.high_24h.usd,
          low24h: marketDataRes.market_data.low_24h.usd,
          volume: marketDataRes.market_data.total_volume.usd,
          marketCap: marketDataRes.market_data.market_cap.usd,
        });
      }
      
    } catch (err) {
      console.error("Failed to fetch BTC price:", err);
      setError("Unable to fetch current prices. Using last known price.");
    } finally {
      setIsLoading(false);
    }
  }, [btcAmount, btcPrice]);

  // Initial fetch and set up polling
  useEffect(() => {
    fetchBTCPrice();
    
    const interval = setInterval(fetchBTCPrice, 30000);
    
    return () => clearInterval(interval);
  }, [fetchBTCPrice]);

  // Handle BTC amount change
  const handleBtcChange = useCallback((value) => {
    const numValue = value === "" ? "" : parseFloat(value);
    
    if (value === "" || (!isNaN(numValue) && numValue >= 0)) {
      setBtcAmount(value);
      if (value !== "" && !isNaN(numValue)) {
        const usdValue = (numValue * btcPrice).toFixed(2);
        setUsdAmount(usdValue);
        addToHistory(numValue, parseFloat(usdValue));
      }
    }
  }, [btcPrice]);

  // Handle USD amount change
  const handleUsdChange = useCallback((value) => {
    const numValue = value === "" ? "" : parseFloat(value);
    
    if (value === "" || (!isNaN(numValue) && numValue >= 0)) {
      setUsdAmount(value);
      if (value !== "" && !isNaN(numValue)) {
        const btcValue = (numValue / btcPrice).toFixed(8);
        setBtcAmount(btcValue);
        addToHistory(parseFloat(btcValue), numValue);
      }
    }
  }, [btcPrice]);

  // Add conversion to history
  const addToHistory = (btc, usd) => {
    const newEntry = {
      id: Date.now(),
      btc,
      usd,
      rate: btcPrice,
      timestamp: new Date(),
    };
    
    setConversionHistory(prev => [newEntry, ...prev.slice(0, 4)]); // Keep last 5
  };

  // Format currency
  const formatCurrency = (value, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: currency === 'BTC' ? 8 : 2,
      maximumFractionDigits: currency === 'BTC' ? 8 : 2,
    }).format(value);
  };

  // Quick amounts
  const quickAmounts = [
    { value: 0.01, label: '0.01 BTC' },
    { value: 0.1, label: '0.1 BTC' },
    { value: 1, label: '1 BTC' },
    { value: 10, label: '10 BTC' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            LIVE PRICES
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Bitcoin Converter
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Convert between Bitcoin and USD with real-time exchange rates powered by global market data.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Market Overview */}
          <div className="lg:col-span-1 space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Bitcoin className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Bitcoin</h3>
                    <p className="text-gray-500">BTC/USD</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold ${btcPrice > previousPrice ? 'text-green-600' : btcPrice < previousPrice ? 'text-red-600' : 'text-gray-900'}`}>
                    {formatCurrency(btcPrice)}
                  </div>
                  <div className={`text-sm font-semibold ${marketData.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {marketData.change24h >= 0 ? '↗' : '↘'} {Math.abs(marketData.change24h?.toFixed(2))}%
                  </div>
                </div>
              </div>
              
              {/* Market Stats */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">24h High</span>
                  <span className="font-semibold">{formatCurrency(marketData.high24h)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">24h Low</span>
                  <span className="font-semibold">{formatCurrency(marketData.low24h)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">24h Volume</span>
                  <span className="font-semibold">${(marketData.volume / 1000000).toFixed(1)}M</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Market Cap</span>
                  <span className="font-semibold">${(marketData.marketCap / 1000000000).toFixed(1)}B</span>
                </div>
              </div>
            </div>

            {/* Recent Conversions */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Recent Conversions</h3>
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              
              {conversionHistory.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No conversions yet</div>
                  <p className="text-sm text-gray-500">Start converting to see history</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {conversionHistory.map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-2 rounded-lg">
                          <ArrowRightLeft className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{entry.btc} BTC</div>
                          <div className="text-xs text-gray-500">
                            {entry.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{formatCurrency(entry.usd)}</div>
                        <div className="text-xs text-gray-500">@ {formatCurrency(entry.rate)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Converter */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {/* Converter Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Currency Converter</h2>
                  <p className="text-gray-600 mt-2">Real-time exchange rates</p>
                </div>
                <button
                  onClick={fetchBTCPrice}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  {isLoading ? 'Updating...' : 'Refresh'}
                </button>
              </div>

              {/* Quick Amounts */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick Amounts</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {quickAmounts.map(({ value, label }) => (
                    <button
                      key={value}
                      onClick={() => handleBtcChange(value.toString())}
                      className="px-4 py-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:border-orange-300 hover:shadow-md transition-all"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Converter Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 mb-8">
                {/* BTC Input */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-gray-700">You Send</label>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Bitcoin className="w-4 h-4" />
                      <span className="text-sm">Bitcoin (BTC)</span>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={btcAmount}
                      onChange={(e) => handleBtcChange(e.target.value)}
                      className="w-full bg-white border-2 border-gray-200 rounded-xl py-5 px-4 text-3xl font-bold text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                      placeholder="0.00"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                        <Bitcoin className="w-5 h-5 text-orange-600" />
                        <span className="font-semibold text-gray-700">BTC</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conversion Arrow */}
                <div className="flex justify-center my-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRightLeft className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* USD Input */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-gray-700">You Receive</label>
                    <div className="flex items-center gap-2 text-gray-500">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm">US Dollar (USD)</span>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={usdAmount}
                      onChange={(e) => handleUsdChange(e.target.value)}
                      className="w-full bg-white border-2 border-gray-200 rounded-xl py-5 px-4 text-3xl font-bold text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                      placeholder="0.00"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-gray-700">USD</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exchange Rate Display */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <Activity className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Current Exchange Rate</div>
                        <div className="text-2xl font-bold text-gray-900">
                          1 BTC = {formatCurrency(btcPrice)}
                        </div>
                      </div>
                    </div>
                    {lastUpdated && (
                      <div className="text-sm text-gray-500">
                        Updated {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Market Status */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${marketData.change24h >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                      {marketData.change24h >= 0 ? (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Market Status</div>
                      <div className={`font-bold ${marketData.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {marketData.change24h >= 0 ? 'Bullish ↗' : 'Bearish ↘'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Data Source</div>
                      <div className="font-bold text-gray-900">CoinGecko API</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Update Frequency</div>
                      <div className="font-bold text-gray-900">Every 30s</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Market Data</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div>Real-time Bitcoin Prices</div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div>Secure & Reliable API</div>
          </div>
          
          {error && (
            <div className="mt-6 inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-lg">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConverterSection;