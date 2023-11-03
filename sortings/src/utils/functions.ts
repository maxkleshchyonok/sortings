export const executeSort = (sort: Function) => {
    document.getElementById('loading-icon')!.style.display = 'block';
    setTimeout(()=> {
      sort();
      document.getElementById('loading-icon')!.style.display = 'none';
    }, 100);
  }