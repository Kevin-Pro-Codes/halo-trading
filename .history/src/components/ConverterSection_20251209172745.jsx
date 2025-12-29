import React, { useState, useEffect, useCallback } from "react";
import { Bitcoin, ArrowUpRight, ArrowDownRight, RefreshCw, Clock, TrendingUp, TrendingDown, DollarSign, Zap, Shield, Activity, History, Repeat } from "lucide-react";

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
        
        if (btcAmount) {
          setUsdAmount((parseFloat(btcAmount) * newPrice).toFixed(2));
        }
      }
      
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
    
    setConversionHistory(prev => [newEntry, ...prev.slice(0, 4)]);
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
    { value: 0.1, label: '0.1 BTC' },
    { value: 10, label: '10 BTC' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Large Bitcoin Icon */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 blur-2xl opacity-70 rounded-full animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-full shadow-2xl shadow-orange-500/40">
                <Bitcoin className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
          
          <div className="pt-24">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Zap className="w-5 h-5" />
              <span className="font-bold tracking-wider">LIVE BITCOIN CONVERTER</span>
              <Zap className="w-5 h-5" />
            </div>
            
            <h1 className="text-5xl font-black text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                BITCOIN PRICE
              </span>
              <span className="text-gray-900"> CONVERTER</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real-time conversion between Bitcoin and US Dollar with live market data
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Market Stats */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Current Price Card */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl shadow-orange-500/30 p-6 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    <Bitcoin className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-white/80 text-sm font-medium">CURRENT PRICE</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="text-4xl font-black">
                        {formatCurrency(btcPrice)}
                      </div>
                      {btcPrice > previousPrice ? (
                        <ArrowUpRight className="w-6 h-6 text-green-300" />
                      ) : btcPrice < previousPrice ? (
                        <ArrowDownRight className="w-6 h-6 text-red-300" />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm text-white/80">24h Change</span>
                  </div>
                  <div className={`text-xl font-bold ${marketData.change24h >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                    {marketData.change24h >= 0 ? '+' : ''}{marketData.change24h?.toFixed(2)}%
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4" />
                    <span className="text-sm text-white/80">24h Volume</span>
                  </div>
                  <div className="text-xl font-bold">
                    ${(marketData.volume / 1000000).toFixed(1)}M
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm text-white/80">Last Updated</span>
                  </div>
                  <span className="font-bold">
                    {lastUpdated ? lastUpdated.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : '--:--'}
                  </span>
                </div>
              </div>
            </div>

            {/* History Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-3 rounded-xl border border-orange-200">
                    <History className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Recent Conversions</h3>
                    <p className="text-sm text-gray-500">Your last 5 conversions</p>
                  </div>
                </div>
              </div>
              
              {conversionHistory.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No conversions yet</div>
                  <p className="text-sm text-gray-500">Convert your first amount</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {conversionHistory.map((entry) => (
                    <div
                      key={entry.id}
                      className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-4 hover:shadow-md transition-all border border-orange-100 hover:border-orange-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                            <Bitcoin className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{entry.btc} BTC</div>
                            <div className="text-xs text-gray-500">
                              {entry.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">{formatCurrency(entry.usd)}</div>
                          <div className="text-xs text-gray-500">@ {formatCurrency(entry.rate)}</div>
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
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-2xl shadow-orange-200/50 p-8 border border-orange-100">
              
              {/* Converter Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-black text-gray-900 mb-2">Converter</h2>
                  <p className="text-gray-600">Enter amount in either field for instant conversion</p>
                </div>
                <button
                  onClick={fetchBTCPrice}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all disabled:opacity-50"
                >
                  <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
                  {isLoading ? 'Updating...' : 'Refresh'}
                </button>
              </div>

              {/* Quick Amounts */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Quick Amounts</h4>
                </div>
                <div className="flex gap-3">
                  {quickAmounts.map(({ value, label }) => (
                    <button
                      key={value}
                      onClick={() => handleBtcChange(value.toString())}
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-orange-100 to-white border-2 border-orange-200 rounded-xl text-gray-900 font-bold hover:border-orange-500 hover:shadow-lg hover:shadow-orange-200 transition-all"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Converter Card */}
              <div className="space-y-10">
                {/* BTC Input */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <Bitcoin className="w-6 h-6 text-orange-600" />
                      Bitcoin (BTC)
                    </label>
                    <div className="text-sm text-gray-500">Current network value</div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 blur-xl opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity"></div>
                    <input
                      type="text"
                      value={btcAmount}
                      onChange={(e) => handleBtcChange(e.target.value)}
                      className="relative w-full bg-white border-4 border-orange-200 rounded-2xl py-7 px-8 text-5xl font-black text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-8 focus:ring-orange-500/20 transition-all placeholder:text-gray-300"
                      placeholder="0.00"
                    />
                    <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 rounded-xl text-white font-bold shadow-lg">
                        <Bitcoin className="w-6 h-6" />
                        <span className="text-lg">BTC</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conversion Arrow */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 blur-lg opacity-50 rounded-full"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/40 hover:scale-105 transition-transform">
                      <Repeat className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* USD Input */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-green-600" />
                      US Dollar (USD)
                    </label>
                    <div className="text-sm text-gray-500">United States currency</div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 blur-xl opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity"></div>
                    <input
                      type="text"
                      value={usdAmount}
                      onChange={(e) => handleUsdChange(e.target.value)}
                      className="relative w-full bg-white border-4 border-orange-200 rounded-2xl py-7 px-8 text-5xl font-black text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-8 focus:ring-orange-500/20 transition-all placeholder:text-gray-300"
                      placeholder="0.00"
                    />
                    <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 px-5 py-3 rounded-xl text-white font-bold shadow-lg">
                        <DollarSign className="w-6 h-6" />
                        <span className="text-lg">USD</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exchange Rate & Market Info */}
                <div className="mt-12 pt-8 border-t border-orange-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Exchange Rate */}
                    <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-200 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">Exchange Rate</div>
                          <div className="text-2xl font-black text-gray-900">
                            1 BTC = {formatCurrency(btcPrice)}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Updates every 30 seconds • Source: CoinGecko API
                      </div>
                    </div>

                    {/* Market Status */}
                    <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-200 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-xl ${marketData.change24h >= 0 ? 'bg-gradient-to-r from-green-100 to-green-50' : 'bg-gradient-to-r from-red-100 to-red-50'}`}>
                            {marketData.change24h >= 0 ? (
                              <TrendingUp className="w-6 h-6 text-green-600" />
                            ) : (
                              <TrendingDown className="w-6 h-6 text-red-600" />
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">Market Status</div>
                            <div className={`text-2xl font-black ${marketData.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {marketData.change24h >= 0 ? 'BULLISH' : 'BEARISH'}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {marketData.change24h >= 0 ? '↗ Up ' : '↘ Down '} 
                        {Math.abs(marketData.change24h)?.toFixed(2)}% in 24h
                      </div>
                    </div>
                  </div>

                  {/* Range Indicator */}
                  <div className="mt-6 bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 border border-orange-200 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-orange-600" />
                        <div>
                          <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">24h Trading Range</div>
                          <div className="text-lg font-bold text-gray-900">
                            {formatCurrency(marketData.low24h)} - {formatCurrency(marketData.high24h)}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Current price position
                      </div>
                    </div>
                    <div className="relative h-3 bg-gradient-to-r from-red-200 via-orange-200 to-green-200 rounded-full overflow-hidden">
                      <div 
                        className="absolute h-full bg-gradient-to-r from-orange-500 to-orange-600"
                        style={{ 
                          width: '6px',
                          left: `${((btcPrice - marketData.low24h) / (marketData.high24h - marketData.low24h) * 100) || 50}%`,
                          transform: 'translateX(-50%)'
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>24h Low</span>
                      <span>Current</span>
                      <span>24h High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-8 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Temporary Data Issue</div>
                <div className="text-gray-700">{error}</div>
                <button 
                  onClick={fetchBTCPrice}
                  className="mt-2 text-sm text-orange-600 font-bold hover:text-orange-700"
                >
                  Try refreshing again →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse"></div>
              <span>Live Market Data</span>
            </div>
            <div className="h-4 w-px bg-orange-200"></div>
            <div>Real-time API Updates</div>
            <div className="h-4 w-px bg-orange-200"></div>
            <div>Secure & Accurate</div>
          </div>
          
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-white px-4 py-2 rounded-full border border-orange-200">
              <Bitcoin className="w-4 h-4 text-orange-600" />
              <span className="text-sm text-gray-700">Powered by CoinGecko API • Updates every 30s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConverterSection;