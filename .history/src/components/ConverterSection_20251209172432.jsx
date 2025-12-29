import React, { useState, useEffect, useCallback } from "react";
import { Bitcoin, ArrowUpRight, ArrowDownRight, RefreshCw, Clock, TrendingUp, TrendingDown, DollarSign, Zap, Shield, Activity, History } from "lucide-react";

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
  });

  // Fetch real-time BTC price with market data
  const fetchBTCPrice = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Using CoinGecko API for more comprehensive data
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=false"
      );
      
      if (!response.ok) throw new Error("Failed to fetch data");
      
      const data = await response.json();
      
      if (data.bitcoin) {
        const newPrice = data.bitcoin.usd;
        setPreviousPrice(btcPrice);
        setBtcPrice(newPrice);
        setLastUpdated(new Date());
        
        // Update USD amount when price changes
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
    
    // Update every 30 seconds
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
        
        // Add to history
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
        
        // Add to history
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

  // Quick amounts (keeping 0.1 and 10 only as requested)
  const quickAmounts = [
    { value: 0.1, label: '0.1 BTC' },
    { value: 10, label: '10 BTC' },
  ];

  return (
    <section className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Bitcoin Icon */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-full shadow-2xl shadow-orange-500/30">
              <Bitcoin className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <div className="pt-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                BITCOIN
              </span>
              <span className="text-white"> CONVERTER</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Real-time Bitcoin to USD conversion powered by live market data
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Market Data */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Main Price Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-gray-400 text-sm">BITCOIN PRICE</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className={`text-3xl font-bold ${btcPrice > previousPrice ? 'text-green-500' : btcPrice < previousPrice ? 'text-red-500' : 'text-white'}`}>
                      {formatCurrency(btcPrice)}
                    </div>
                    {btcPrice > previousPrice ? (
                      <ArrowUpRight className="w-5 h-5 text-green-500" />
                    ) : btcPrice < previousPrice ? (
                      <ArrowDownRight className="w-5 h-5 text-red-500" />
                    ) : null}
                  </div>
                </div>
                <button
                  onClick={fetchBTCPrice}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-orange-600 to-orange-500 p-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <RefreshCw className={`w-5 h-5 text-white ${isLoading ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {/* Market Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-gray-400">24h Change</span>
                  </div>
                  <span className={`font-bold ${marketData.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {marketData.change24h >= 0 ? '+' : ''}{marketData.change24h?.toFixed(2)}%
                  </span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <Activity className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-gray-400">24h Volume</span>
                  </div>
                  <span className="font-bold text-white">${(marketData.volume / 1000000).toFixed(1)}M</span>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <Shield className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-gray-400">Last Updated</span>
                  </div>
                  <span className="font-bold text-white">
                    {lastUpdated ? lastUpdated.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : '--:--'}
                  </span>
                </div>
              </div>
            </div>

            {/* History Section */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-600/20 p-2 rounded-lg">
                    <History className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Recent Conversions</h3>
                </div>
                <Clock className="w-5 h-5 text-gray-500" />
              </div>
              
              {conversionHistory.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-500 mb-2">No conversions yet</div>
                  <p className="text-sm text-gray-600">Start converting to see history</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {conversionHistory.map((entry) => (
                    <div
                      key={entry.id}
                      className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800 transition-colors border border-gray-700/50"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <Bitcoin className="w-4 h-4 text-orange-500" />
                            <span className="font-bold text-white">{entry.btc} BTC</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {entry.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-white">{formatCurrency(entry.usd)}</div>
                          <div className="text-xs text-gray-500">Rate: {formatCurrency(entry.rate)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Converter */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8">
              
              {/* Converter Header */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-3">Convert Instantly</h2>
                <p className="text-gray-400">Enter any amount to convert between Bitcoin and USD</p>
              </div>

              {/* Quick Amounts - Only showing 0.1 and 10 BTC as requested */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">QUICK AMOUNTS</h4>
                <div className="flex gap-3">
                  {quickAmounts.map(({ value, label }) => (
                    <button
                      key={value}
                      onClick={() => handleBtcChange(value.toString())}
                      className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white font-medium hover:bg-gray-700 hover:border-orange-500/50 transition-all"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Converter Card */}
              <div className="space-y-8">
                {/* BTC Input */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-semibold text-gray-400">BITCOIN (BTC)</label>
                    <div className="flex items-center gap-2 text-orange-500">
                      <Bitcoin className="w-4 h-4" />
                      <span className="text-sm font-medium">Bitcoin Network</span>
                    </div>
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      value={btcAmount}
                      onChange={(e) => handleBtcChange(e.target.value)}
                      className="w-full bg-black/50 border-2 border-gray-800 rounded-2xl py-6 px-6 text-4xl font-bold text-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all"
                      placeholder="0.00"
                    />
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                      <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg border border-gray-700">
                        <Bitcoin className="w-5 h-5 text-orange-500" />
                        <span className="font-bold text-white">BTC</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conversion Arrow */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 blur-lg opacity-30 rounded-full"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                      <div className="text-black text-2xl font-bold">⇄</div>
                    </div>
                  </div>
                </div>

                {/* USD Input */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-semibold text-gray-400">US DOLLAR (USD)</label>
                    <div className="flex items-center gap-2 text-green-500">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm font-medium">US Currency</span>
                    </div>
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      value={usdAmount}
                      onChange={(e) => handleUsdChange(e.target.value)}
                      className="w-full bg-black/50 border-2 border-gray-800 rounded-2xl py-6 px-6 text-4xl font-bold text-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all"
                      placeholder="0.00"
                    />
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                      <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg border border-gray-700">
                        <DollarSign className="w-5 h-5 text-green-500" />
                        <span className="font-bold text-white">USD</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exchange Rate */}
                <div className="mt-10 pt-8 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-orange-500/20 p-3 rounded-xl">
                        <Zap className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">CURRENT EXCHANGE RATE</div>
                        <div className="text-2xl font-bold text-white">
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

                {/* Market Status */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">24h Range</span>
                      <span className="text-sm text-gray-500">Low - High</span>
                    </div>
                    <div className="mt-2 text-white font-medium">
                      {formatCurrency(marketData.low24h)} - {formatCurrency(marketData.high24h)}
                    </div>
                    <div className="mt-3 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500"
                        style={{ 
                          width: `${((btcPrice - marketData.low24h) / (marketData.high24h - marketData.low24h) * 100) || 50}%` 
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Market Status</span>
                      <div className={`p-1 rounded ${marketData.change24h >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                        {marketData.change24h >= 0 ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    </div>
                    <div className={`mt-2 text-lg font-bold ${marketData.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {marketData.change24h >= 0 ? 'BULLISH' : 'BEARISH'}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {marketData.change24h >= 0 ? '↗ Up ' : '↘ Down '} {Math.abs(marketData.change24h)?.toFixed(2)}% today
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-8 bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <div className="text-orange-400 font-medium">Update Error</div>
                <div className="text-orange-500/80 text-sm">{error}</div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm">
            Prices update every 30 seconds • Real-time data from CoinGecko API • Rates are for informational purposes only
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConverterSection;