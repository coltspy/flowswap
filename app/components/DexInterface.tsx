'use client';

import { useState } from 'react';
import { ArrowDownCircle, Settings, Wallet, BarChart2, Flame, Book, Moon } from 'lucide-react';

export default function DexInterface() {
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center space-x-8">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-rose-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
              FlowSwap
            </span>
          </div>
          <div className="flex space-x-6">
            <button className="flex items-center gap-2 text-rose-500">
              <BarChart2 className="w-4 h-4" />
              Trade
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-rose-500 transition-colors">
              <Book className="w-4 h-4" />
              Pool
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors">
            <Moon className="w-5 h-5 text-rose-500" />
          </button>
          <button className="bg-gradient-to-r from-rose-500 to-purple-500 px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-opacity">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto p-8">
        <div className="flex gap-8">
          {/* Left Panel - Stats */}
          <div className="flex-1 space-y-4">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">Market Overview</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-sm text-gray-400">24h Volume</div>
                  <div className="text-xl font-medium">$24.5M</div>
                  <div className="text-sm text-green-400">+12.5%</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-sm text-gray-400">Total TVL</div>
                  <div className="text-xl font-medium">$156.8M</div>
                  <div className="text-sm text-rose-500">-2.3%</div>
                </div>
              </div>
            </div>
            
            {/* Price Chart Card */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 h-[400px]">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold">SOL/USDC</h3>
                  <div className="text-sm text-gray-400">Nov 18, 2024</div>
                </div>
                <div className="text-right">
                  <div className="text-xl">$102.45</div>
                  <div className="text-sm text-green-400">+$2.45 (2.4%)</div>
                </div>
              </div>
              <div className="h-[300px] bg-slate-800/50 rounded-xl">
                {/* Chart would go here */}
              </div>
            </div>
          </div>

          {/* Right Panel - Swap Interface */}
          <div className="w-[400px] bg-black/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Swap Tokens</h2>
              <button className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors">
                <Settings className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Token Input */}
            <div className="bg-slate-800/50 rounded-xl p-4 mb-3">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">You Pay</span>
                <div className="flex gap-2 text-sm">
                  <button className="text-rose-500 hover:text-rose-400">Max</button>
                  <span className="text-gray-400">Balance: 0.0</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-slate-900/50 hover:bg-slate-900 px-3 py-2 rounded-lg transition-colors">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-rose-500"></div>
                  <span>SOL</span>
                  <span className="text-gray-400">▼</span>
                </button>
                <input
                  type="text"
                  value={amount1}
                  onChange={(e) => setAmount1(e.target.value)}
                  placeholder="0.0"
                  className="w-full bg-transparent text-right text-2xl outline-none"
                />
              </div>
            </div>

            {/* Swap Icon */}
            <div className="flex justify-center -my-2 relative z-10">
              <button className="p-2 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
                <ArrowDownCircle className="w-6 h-6 text-rose-500" />
              </button>
            </div>

            {/* Token Output */}
            <div className="bg-slate-800/50 rounded-xl p-4 mt-1 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">You Receive</span>
                <span className="text-sm text-gray-400">Balance: 0.0</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-slate-900/50 hover:bg-slate-900 px-3 py-2 rounded-lg transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-500"></div>
                  <span>USDC</span>
                  <span className="text-gray-400">▼</span>
                </button>
                <input
                  type="text"
                  value={amount2}
                  onChange={(e) => setAmount2(e.target.value)}
                  placeholder="0.0"
                  className="w-full bg-transparent text-right text-2xl outline-none"
                />
              </div>
            </div>

            {/* Swap Details */}
            <div className="bg-slate-800/50 rounded-xl p-4 mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Exchange Rate</span>
                <span>1 SOL = 102.45 USDC</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Network Fee</span>
                <span>~$0.15</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-rose-500 to-purple-500 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}