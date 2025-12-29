import React, { useState, useEffect, useCallback } from "react";
import { TrendingUp, TrendingDown, RefreshCw, AlertCircle, Zap, History, Globe } from "lucide-react";

const ConverterSection = () => {
  const [btcAmount, setBtcAmount] = useState("1");
  const [usdAmount, setUsdAmount] = useState("0");
  const [btcPrice, setBtcPrice] = useState(106047);
  const [previousPrice, setPreviousPrice] = useState(106047);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);
  const [conversionHistory, setConversionHistory] = useState([]);
  const [activeTab, setActiveTab] = useState("converter");
  const [timeframe, setTimeframe] = useState("24h");
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
    
    setConversionHistory(prev => [newEntry, ...prev.slice(0, 9)]); // Keep last 10
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

  // Get price change color
  const getChangeColor = () => {
    if (btcPrice > previousPrice) return 'text-green-500';
    if (btcPrice < previousPrice) return 'text-red-500';
    return 'text-gray-400';
  };

  // Get change icon
  const getChangeIcon = () => {
    if (btcPrice > previousPrice) return <TrendingUp className="w-4 h-4" />;
    if (btcPrice < previousPrice) return <TrendingDown className="w-4 h-4" />;
    return null;
  };

  // Predefined amounts
  const quickAmounts = [0.1, 0.5, 1, 5, 10];

  return (
    <section className="section-black py-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="section-content max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Bitcoin Converter
            </h2>
            <Globe className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-gray-400 text-lg">
            Real-time Bitcoin to USD conversion with live market data
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="text-gray-400 text-sm mb-1">Current Price</div>
            <div className="flex items-center gap-2">
              <div className={`text-2xl font-bold ${getChangeColor()}`}>
                {formatCurrency(btcPrice)}
              </div>
              {getChangeIcon()}
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="text-gray-400 text-sm mb-1">24h Change</div>
            <div className={`text-2xl font-bold ${marketData.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {marketData.change24h >= 0 ? '+' : ''}{marketData.change24h?.toFixed(2)}%
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="text-gray-400 text-sm mb-1">24h Volume</div>
            <div className="text-2xl font-bold text-white">
              ${(marketData.volume / 1000000).toFixed(1)}M
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="text-gray-400 text-sm mb-1">Last Updated</div>
            <div className="text-2xl font-bold text-white">
              {lastUpdated ? lastUpdated.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : '--:--'}
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 p-6">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gray-700">
            <button
              className={`pb-3 px-4 font-semibold transition-all ${activeTab === 'converter' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('converter')}
            >
              Converter
            </button>
            <button
              className={`pb-3 px-4 font-semibold transition-all ${activeTab === 'history' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('history')}
            >
              <div className="flex items-center gap-2">
                <History className="w-4 h-4" />
                History
              </div>
            </button>
          </div>

          {activeTab === 'converter' ? (
            <>
              {/* Converter Card */}
              <div className="converter-card bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 mb-6">
                {/* Quick Amounts */}
                <div className="mb-6">
                  <div className="text-gray-400 text-sm mb-3">Quick Amounts (BTC)</div>
                  <div className="flex flex-wrap gap-2">
                    {quickAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleBtcChange(amount.toString())}
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105"
                      >
                        {amount} BTC
                      </button>
                    ))}
                  </div>
                </div>

                {/* Converter Inputs */}
                <div className="space-y-6">
                  <div className="converter-input-group">
                    <label className="block text-gray-400 mb-2 text-sm font-medium">
                      Bitcoin (BTC)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={btcAmount}
                        onChange={(e) => handleBtcChange(e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded-xl py-4 px-4 text-2xl font-bold text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="0.00"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        BTC
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="bg-gray-700 p-2 rounded-full">
                      <RefreshCw className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>

                  <div className="converter-input-group">
                    <label className="block text-gray-400 mb-2 text-sm font-medium">
                      US Dollar (USD)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={usdAmount}
                        onChange={(e) => handleUsdChange(e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded-xl py-4 px-4 text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="0.00"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        USD
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Rate */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400">Exchange Rate</div>
                    <div className="text-2xl font-bold text-white">
                      1 BTC = {formatCurrency(btcPrice)}
                    </div>
                  </div>
                  
                  {/* Refresh Button */}
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={fetchBTCPrice}
                      disabled={isLoading}
                      className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                      {isLoading ? 'Updating...' : 'Refresh Rate'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 rounded-xl p-4">
                  <h4 className="text-gray-400 text-sm mb-2">24h Range</h4>
                  <div className="text-white">
                    {formatCurrency(marketData.low24h)} - {formatCurrency(marketData.high24h)}
                  </div>
                  <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                      style={{ 
                        width: `${((btcPrice - marketData.low24h) / (marketData.high24h - marketData.low24h) * 100) || 50}%` 
                      }}
                    />
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl p-4">
                  <h4 className="text-gray-400 text-sm mb-2">Market Status</h4>
                  <div className={`text-lg font-bold ${marketData.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {marketData.change24h >= 0 ? 'Bullish' : 'Bearish'} Market
                  </div>
                  <div className="text-sm text-gray-400">
                    {marketData.change24h >= 0 ? '↗' : '↘'} {Math.abs(marketData.change24h)}% today
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Conversion History */
            <div className="conversion-history">
              <h3 className="text-xl font-bold mb-4">Recent Conversions</h3>
              {conversionHistory.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  No conversion history yet
                </div>
              ) : (
                <div className="space-y-3">
                  {conversionHistory.map((entry) => (
                    <div
                      key={entry.id}
                      className="bg-gray-900/50 rounded-lg p-4 flex justify-between items-center hover:bg-gray-900 transition-colors"
                    >
                      <div>
                        <div className="text-white font-bold">
                          {entry.btc} BTC
                        </div>
                        <div className="text-gray-400 text-sm">
                          {entry.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold">
                          {formatCurrency(entry.usd)}
                        </div>
                        <div className="text-gray-400 text-sm">
                          @ {formatCurrency(entry.rate)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-6 flex items-center gap-2 text-yellow-500 bg-yellow-500/10 p-4 rounded-xl">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Prices update every 30 seconds. Rates are for informational purposes only.
            Actual exchange rates may vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConverterSection;