/* eslint-disable @typescript-eslint/no-explicit-any */

  
export const getErrorMessage = (error: any): string => {
    if (!error) {
      return "An error occurred";
    }
    if ('message' in error && typeof error.message === 'string') {
      return error.message;
    }
    if ('data' in error && error.data && typeof error.data.message === 'string') {
      return error.data.message;
    }
    if ('message' in error && typeof error.message === 'string') {
      return error.message;
    }
  
    return "An error occurred";
  };