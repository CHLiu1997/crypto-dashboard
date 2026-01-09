import { useEffect } from 'react';
import { getCoinPrice } from './services/cryptoApi';
import { COIN_IDS } from './constants/coins'; 

function App() {
  useEffect(() => {
    const test = async () => {
      try {
        console.log('=== 測試 1: 單一幣種（傳字串）===');
        const single = await getCoinPrice('bitcoin');
        console.log('結果:', single);
        console.log('比特幣價格:', single.bitcoin.usd);
        
        console.log('\n=== 測試 2: 多個幣種（傳陣列）===');
        const multiple = await getCoinPrice([
          'bitcoin',
          'ethereum', 
          'solana',
          'ripple'
        ]);
        console.log('結果:', multiple);
        console.log('比特幣價格:', multiple.bitcoin.usd);
        console.log('以太幣價格:', multiple.ethereum.usd);
        
        console.log('\n=== 測試 3: 單一幣種用陣列（也可以）===');
        const singleArray = await getCoinPrice(['bitcoin']);
        console.log('結果:', singleArray);

        console.log('\n=== 測試 4: 用 COIN_IDS 常數 ===');
        const fromConstants = await getCoinPrice(COIN_IDS);
        console.log('結果:', fromConstants);
      } catch (error) {
        console.error('❌ 錯誤:', error);
      }
    };
    
    test();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Crypto Dashboard
        </h1>
        <p className="text-gray-600">
          Tailwind CSS is working! 🎉
        </p>
        <div className="mt-10 flex gap-2">
          <span className="text-crypto-green">↑ +5.2%</span>
          <span className="text-crypto-red">↓ -3.1%</span>
        </div>
      </div>
    </div>
  );
}

export default App
