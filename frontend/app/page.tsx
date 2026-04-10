'use client';

import { useState } from 'react';

const CONTRACT_ADDRESS = '0x50aEd6E73a526E9497a200A92e8bd0D68F838f02';

export default function GenLayerCookingGame() {
  const [gameId, setGameId] = useState('game001');
  const [ingredients, setIngredients] = useState('鸡蛋\n面粉\n牛奶\n巧克力');
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const createGame = () => {
    setLoading(true);
    setResult('✅ 创建游戏请求已发送！\n\n请打开 GenLayer Studio，调用 add_game 函数完成操作。\n\n游戏ID: ' + gameId);
    setTimeout(() => setLoading(false), 1200);
  };

  const joinGame = () => {
    setLoading(true);
    setResult('✅ 提交菜谱请求已发送！\n\n请在 GenLayer Studio 调用 join_game 函数，让 AI 打分。\n\n游戏ID: ' + gameId);
    setTimeout(() => setLoading(false), 1200);
  };

  const viewGame = () => {
    setLoading(true);
    setResult('📋 查询中...\n\n请在 GenLayer Studio 调用 get_game 函数查看游戏详情。\n\n游戏ID: ' + gameId);
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto p-8">
        {/* 头部 */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="text-8xl">🍳</div>
          </div>
          <h1 className="text-6xl font-bold tracking-tight">GenLayer 烹饪游戏</h1>
          <p className="text-2xl text-orange-400 mt-3">AI 驱动的烹饪挑战</p>
          <p className="text-gray-400 mt-2 font-mono text-sm">合约地址: {CONTRACT_ADDRESS}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 卡片1 - 创建游戏 */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-700">
            <div className="bg-orange-600 text-white text-sm font-bold px-4 py-1 inline-block rounded-full mb-6">1</div>
            <h2 className="text-3xl font-semibold mb-6">创建新游戏</h2>
            
            <input 
              type="text" 
              value={gameId} 
              onChange={(e) => setGameId(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 mb-6 text-lg"
              placeholder="游戏ID"
            />
            
            <textarea 
              value={ingredients} 
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 h-40 mb-8 text-lg font-mono"
              placeholder="食材列表（每行一个）"
            />

            <button 
              onClick={createGame}
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 py-4 rounded-2xl font-bold text-xl disabled:opacity-70"
            >
              {loading ? '发送中...' : '创建游戏'}
            </button>
          </div>

          {/* 卡片2 - 加入游戏 */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-700">
            <div className="bg-orange-600 text-white text-sm font-bold px-4 py-1 inline-block rounded-full mb-6">2</div>
            <h2 className="text-3xl font-semibold mb-6">加入游戏并提交菜谱</h2>
            
            <input 
              type="text" 
              value={gameId} 
              onChange={(e) => setGameId(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 mb-6 text-lg"
              placeholder="游戏ID"
            />
            
            <textarea 
              value={answer} 
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 h-52 mb-8 text-lg"
              placeholder="在这里写下你的完整菜谱..."
            />

            <button 
              onClick={joinGame}
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 py-4 rounded-2xl font-bold text-xl disabled:opacity-70"
            >
              {loading ? '发送中...' : '提交菜谱'}
            </button>
          </div>

          {/* 卡片3 - 查看游戏 */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-700">
            <div className="bg-emerald-600 text-white text-sm font-bold px-4 py-1 inline-block rounded-full mb-6">3</div>
            <h2 className="text-3xl font-semibold mb-6">查看游戏</h2>
            
            <input 
              type="text" 
              value={gameId} 
              onChange={(e) => setGameId(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 mb-8 text-lg"
              placeholder="输入游戏ID"
            />

            <button 
              onClick={viewGame}
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 py-4 rounded-2xl font-bold text-xl disabled:opacity-70"
            >
              {loading ? '查询中...' : '查看游戏详情'}
            </button>
          </div>
        </div>

        {/* 结果区域 */}
        {result && (
          <div className="mt-12 p-8 bg-zinc-900 border border-orange-500/30 rounded-3xl text-lg whitespace-pre-line">
            {result}
          </div>
        )}

        <div className="text-center mt-16 text-gray-500 text-sm">
          当前为演示模式 • 实际合约交互请在 GenLayer Studio 中进行<br />
          （add_game / join_game / get_game）
        </div>
      </div>
    </div>
  );
}