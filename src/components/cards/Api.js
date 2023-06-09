const GetProducts = async () => {
    try {
      const response = await fetch('https://tasttaskbe.fernandolucas8.repl.co/scandiweb-test-task-backend/index.php?route=getAllProducts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export default GetProducts;
  