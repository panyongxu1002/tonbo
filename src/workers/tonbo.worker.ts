import tonbo from '../pkg/sqlite_tonbo.js';

self.onmessage = async (e) => {
  try {
    // 初始化 TonboLite
    await tonbo.default();
    const conn = new tonbo.Connection();
    
    // 根据消息类型执行不同操作
    switch (e.data.type) {
      case 'init':
        self.postMessage({ type: 'init', success: true });
        break;
      case 'query':
        const result = await conn.select(e.data.sql);
        self.postMessage({ type: 'query', result });
        break;
      // 可以添加其他操作类型
    }
  } catch (error) {
    self.postMessage({ type: 'error', error: error });
  }
}; 