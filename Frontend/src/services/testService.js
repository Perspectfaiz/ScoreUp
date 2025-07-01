import axios from 'axios';

export async function createTest(testData) {
  console.log("createTest called");
  // console.log(testData);
  const token = localStorage.getItem('itoken');
  try {
    const response = await axios.post(
      'http://localhost:8080/api/tests/add', 
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
