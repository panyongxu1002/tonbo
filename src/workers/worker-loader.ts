export function createWorker() {
  if (typeof window === 'undefined') return null;
  
  try {
    // 使用 Blob 创建 worker
    const workerCode = `
      console.log('Worker starting...');

      self.onmessage = async (e) => {
        console.log('Worker received message:', e.data);
        
        try {
          if (e.data.type === 'init') {
            console.log("Starting worker initialization...");
            const tonboModule = await import('/pkg/sqlite_tonbo.js');
            await tonboModule.default();
            console.log("Worker initialized successfully");
            
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

      console.log('Worker setup complete');
    `;

    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(blob);
    return new Worker(workerUrl, { type: 'module' });
  } catch (error) {
    console.error('Failed to create worker:', error);
    return null;
  }
} 