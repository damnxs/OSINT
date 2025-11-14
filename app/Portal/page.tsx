"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Database, 
  Network, 
  History, 
  Bookmark, 
  Zap, 
  Upload, 
  Filter,
  Save,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

/**
 * OSINT Platform Portal
 * Terminal-style intelligence interface
 */

export default function Portal() {
  const [targetIdentifier, setTargetIdentifier] = useState("john.doe@example.com");
  const [searchType, setSearchType] = useState("deep-scan");
  const [regionFilter, setRegionFilter] = useState("global");
  const [includeArchived, setIncludeArchived] = useState(false);
  const [deepWebSearch, setDeepWebSearch] = useState(true);
  const [aiEnhancement, setAiEnhancement] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleExecute = () => {
    console.log("Executing search...");
  };

  return (
    <div className="min-h-screen bg-black text-gray-400 font-mono" suppressHydrationWarning>
      {/* Header */}
      <header className="border-b border-yellow-800/50 bg-black/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-gray-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center gap-2">
              <ChevronRight className="text-yellow-600 max-sm:hidden" size={20} />
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <span className="text-lg md:text-xl font-bold text-white">OSINT_PLATFORM</span>
              </Link>
              <span className="text-yellow-600 text-xs md:text-sm ml-1 md:ml-2">[ v1 ]</span>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-yellow-600">STATUS:</span>
              <span className="text-white">ONLINE</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <div className="hidden xl:flex items-center gap-2">
              <span className="text-yellow-600">UPTIME:</span>
              <span className="text-white">99.8%</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-white max-md:hidden">Wallet Details</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative">
        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 border-r border-yellow-800/50 bg-black/95 lg:bg-black/50
          min-h-[calc(100vh-57px)] lg:min-h-[calc(100vh-57px)]
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-4">
            <div className="text-yellow-600 text-xs mb-4 uppercase tracking-wider">// MAIN_MODULES</div>
            <nav className="space-y-1">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded bg-yellow-500/20 text-white hover:bg-yellow-500/30 transition-colors"
              >
                <Search size={18} />
                <span>Search Engine</span>
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded text-yellow-600 hover:bg-yellow-500/20 hover:text-white transition-colors"
              >
                <Database size={18} />
                <span>Data Sources</span>
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded text-yellow-600 hover:bg-yellow-500/20 hover:text-white transition-colors"
              >
                <Network size={18} />
                <span>Network Graph</span>
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded text-yellow-600 hover:bg-yellow-500/20 hover:text-white transition-colors"
              >
                <History size={18} />
                <span>History</span>
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded text-yellow-600 hover:bg-yellow-500/20 hover:text-white transition-colors"
              >
                <Bookmark size={18} />
                <span>Saved Queries</span>
              </button>
            </nav>
          </div>

          {/* System Stats */}
          <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-yellow-800/50 bg-black/80">
            <div className="text-yellow-600 text-xs mb-3 uppercase">SYSTEM_STATS</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-yellow-600">Queries Today:</span>
                <span className="text-white">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-600">DB Records:</span>
                <span className="text-white">8.4B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-600">API Calls:</span>
                <span className="text-white">94.2K</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
              <div className="border border-yellow-800/50 bg-black p-3 sm:p-4">
                <div className="text-yellow-600 text-xs mb-1">TOTAL_SEARCHES</div>
                <div className="text-xl sm:text-2xl font-bold text-white">847,293</div>
                <div className="text-yellow-600 text-xs mt-1">+12.4% from last week</div>
              </div>
              <div className="border border-yellow-800/50 bg-black p-3 sm:p-4">
                <div className="text-yellow-600 text-xs mb-1">DATA_SOURCES</div>
                <div className="text-xl sm:text-2xl font-bold text-white">1,247</div>
                <div className="text-yellow-600 text-xs mt-1">Active connections</div>
              </div>
              <div className="border border-yellow-800/50 bg-black p-3 sm:p-4">
                <div className="text-yellow-600 text-xs mb-1">RECORDS_FOUND</div>
                <div className="text-xl sm:text-2xl font-bold text-white">8.4B</div>
                <div className="text-yellow-600 text-xs mt-1">Indexed records</div>
              </div>
              <div className="border border-yellow-800/50 bg-black p-3 sm:p-4">
                <div className="text-yellow-600 text-xs mb-1">AVG_RESPONSE</div>
                <div className="text-xl sm:text-2xl font-bold text-white">0.42s</div>
                <div className="text-yellow-600 text-xs mt-1">Query speed</div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
              {/* Search Interface */}
              <div className="xl:col-span-2 space-y-4 sm:space-y-6">
                {/* Search Input */}
                <div className="border border-yellow-800/50 bg-black p-4 sm:p-6">
                  <div className="text-yellow-600 text-xs mb-3 sm:mb-4">// SEARCH_INTERFACE</div>
                  <div className="text-white text-sm sm:text-base mb-3 sm:mb-4">Initialize target reconnaissance protocol</div>
                  
                  <div className="border border-yellow-800/50 bg-black p-3 sm:p-4 mb-3 sm:mb-4">
                    <div className="text-yellow-600 text-xs mb-2">TARGET_IDENTIFIER</div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-white">$</span>
                        <input
                          type="text"
                          value={targetIdentifier}
                          onChange={(e) => setTargetIdentifier(e.target.value)}
                          className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm sm:text-base"
                          placeholder="Enter target identifier..."
                        />
                      </div>
                      <button
                        onClick={handleExecute}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-600/30 hover:bg-yellow-600/50 border border-yellow-600 text-white transition-colors text-sm whitespace-nowrap"
                      >
                        <Search size={16} />
                        <span>EXECUTE</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <div className="text-yellow-600 text-xs mb-2">SEARCH_TYPE</div>
                      <select
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                        className="w-full bg-black border border-yellow-800/50 text-white p-2 text-sm outline-none focus:border-yellow-600 transition-colors"
                      >
                        <option value="deep-scan">Deep Scan</option>
                        <option value="quick-lookup">Quick Lookup</option>
                        <option value="comprehensive">Comprehensive</option>
                        <option value="stealth-mode">Stealth Mode</option>
                      </select>
                    </div>
                    <div>
                      <div className="text-yellow-600 text-xs mb-2">REGION_FILTER</div>
                      <select
                        value={regionFilter}
                        onChange={(e) => setRegionFilter(e.target.value)}
                        className="w-full bg-black border border-yellow-800/50 text-white p-2 text-sm outline-none focus:border-yellow-600 transition-colors"
                      >
                        <option value="global">Global</option>
                        <option value="north-america">North America</option>
                        <option value="europe">Europe</option>
                        <option value="asia-pacific">Asia Pacific</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                    <label className="flex items-center gap-2 text-yellow-600 hover:text-white cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={includeArchived}
                        onChange={(e) => setIncludeArchived(e.target.checked)}
                        className="accent-yellow-600"
                      />
                      <span className="text-xs sm:text-sm">Include archived data</span>
                    </label>
                    <label className="flex items-center gap-2 text-yellow-600 hover:text-white cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={deepWebSearch}
                        onChange={(e) => setDeepWebSearch(e.target.checked)}
                        className="accent-yellow-600"
                      />
                      <span className="text-xs sm:text-sm">Deep web search</span>
                    </label>
                    <label className="flex items-center gap-2 text-yellow-600 hover:text-white cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={aiEnhancement}
                        onChange={(e) => setAiEnhancement(e.target.checked)}
                        className="accent-yellow-600"
                      />
                      <span className="text-xs sm:text-sm">AI enhancement</span>
                    </label>
                  </div>
                </div>

                {/* Recent Queries */}
                <div className="border border-yellow-800/50 bg-black p-4 sm:p-6">
                  <div className="text-yellow-600 text-xs mb-3 sm:mb-4">RECENT_QUERIES</div>
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { query: "jane.smith@company.com", time: "2m ago" },
                      { query: "+1-555-0123", time: "15m ago" },
                      { query: "@techuser247", time: "1h ago" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 sm:p-3 bg-black/50 border border-yellow-800/30 hover:border-yellow-600/50 cursor-pointer transition-colors group">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full group-hover:bg-yellow-500 flex-shrink-0"></div>
                          <span className="text-white group-hover:text-gray-300 text-xs sm:text-sm truncate">{item.query}</span>
                        </div>
                        <span className="text-yellow-600 text-xs sm:text-sm flex-shrink-0 ml-2">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Quick Actions */}
                <div className="border border-yellow-800/50 bg-black p-4 sm:p-6">
                  <div className="text-yellow-600 text-xs mb-3 sm:mb-4">QUICK_ACTIONS</div>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-2 p-2 sm:p-3 bg-black/50 border border-yellow-800/30 hover:border-yellow-600 hover:bg-yellow-600/20 text-white transition-colors">
                      <Zap size={16} className="flex-shrink-0" />
                      <span className="text-xs sm:text-sm">Bulk Search</span>
                    </button>
                    <button className="w-full flex items-center gap-2 p-2 sm:p-3 bg-black/50 border border-yellow-800/30 hover:border-yellow-600 hover:bg-yellow-600/20 text-white transition-colors">
                      <Upload size={16} className="flex-shrink-0" />
                      <span className="text-xs sm:text-sm">Import List</span>
                    </button>
                    <button className="w-full flex items-center gap-2 p-2 sm:p-3 bg-black/50 border border-yellow-800/30 hover:border-yellow-600 hover:bg-yellow-600/20 text-white transition-colors">
                      <Filter size={16} className="flex-shrink-0" />
                      <span className="text-xs sm:text-sm">Advanced Filters</span>
                    </button>
                  </div>
                </div>

                {/* API Status */}
                <div className="border border-yellow-800/50 bg-black p-4 sm:p-6">
                  <div className="text-yellow-600 text-xs mb-3 sm:mb-4">API_STATUS</div>
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { name: "Kamikaze", status: "ACTIVE" },
                      { name: "Hunter", status: "ACTIVE" },
                      { name: "WhitePages", status: "LIMITED" },
                      { name: "Worldwide", status: "ACTIVE" }
                    ].map((api, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-yellow-600 truncate mr-2">{api.name}</span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div className={`w-2 h-2 rounded-full ${api.status === "ACTIVE" ? "bg-green-500" : "bg-yellow-500"} animate-pulse`}></div>
                          <span className={api.status === "ACTIVE" ? "text-white" : "text-yellow-500"}>{api.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
