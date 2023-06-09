const deleteProduct = async (id) => {
  const formData = new FormData();
  formData.append('id', id);
  try {
    const response = await fetch('https://tasttaskbe.fernandolucas8.repl.co/scandiweb-test-task-backend/index.php?route=deleteProducts', {
      method: 'POST',
      body: formData,
      cache: 'default'
    });

    if (response.ok) {
      window.location.href = "/";
    } else {
      throw new Error('An error occured during producs deleting. 1');
    }
  } catch (error) {
    console.error(error);
  }
};

export default deleteProduct;