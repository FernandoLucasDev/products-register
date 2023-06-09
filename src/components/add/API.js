import { Navigate } from 'react-router-dom';

const createProduct = async (data) => {

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
    });
    
    try {
      const response = await fetch('https://tasttaskbe.fernandolucas8.repl.co/scandiweb-test-task-backend/index.php?route=createProduct', {
        method: 'POST',
        body: formData,
        cache: 'default',
      });
  
      console.log(response);
  
      if (response.ok) {
        window.location.href = "/";
      } else {
        throw new Error('Erro ao criar o produto. 1');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  export default createProduct;
  