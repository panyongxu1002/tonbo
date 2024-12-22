console.log('Worker file loaded - INITIAL');

// 添加错误处理
self.onerror = (error) => {
  console.error('Worker error:', error);
};

// 使用动态导入
async function initTonbo() {
  try {
    const tonboModule = await import('../pkg/sqlite_tonbo.js');
    return tonboModule.default;
  } catch (error) {
    console.error('Failed to load tonbo module:', error);
    throw error;
  }
}

self.onmessage = async (e) => {
  console.log('Worker received message:', e.data);
  
  try {
    if (e.data.type === 'init') {
      console.log("Starting worker initialization...");
      const tonbo = await initTonbo();
      await tonbo();
      console.log("Worker initialized successfully");
      
      const conn = new tonbo.Connection();
      console.log("Database connection established");
      
      self.postMessage({ type: 'init', success: true });
    }
    
    if (e.data.type === 'select') {
      console.log("Received query:", e.data.sql);
      // ... 执行查询的代码 ...
    }
  } catch (error) {
    console.error('Error in worker:', error);
    self.postMessage({ type: e.data.type, success: false, error: error.message });
  }
};

console.log('Worker file setup complete');