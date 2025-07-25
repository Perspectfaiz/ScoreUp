import axios from 'axios';

export async function createTest(testData) {
  console.log("createTest called");
  // console.log(testData);
  const token = localStorage.getItem('itoken');
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/tests/add`, 
      testData,
      {
        headers: {
          itoken: token
        }
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error creating test:', error);
    throw new Error(error.response?.data?.message || 'Failed to create test');
  }
}

export async function getAllTests() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tests/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tests:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch tests');
  }
}

export async function getTestById(testId) {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tests/${testId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching test:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch test');
  }
}
