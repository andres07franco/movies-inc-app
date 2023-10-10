import Toast from 'react-native-root-toast';

export const useToast = () => {
  const showSuccess = (message: string, dealy?: number) => {
    if (dealy) {
      setTimeout(() => {
        Toast.show(message, {
          duration: Toast.durations.LONG,
          backgroundColor: '#282ddb',
        });
      }, dealy);
      return;
    }
    Toast.show(message, {
      duration: Toast.durations.LONG,
      backgroundColor: '#282ddb',
    });
  };
  const showError = (message: string) => {
    Toast.show(message, {
      duration: Toast.durations.LONG,
      backgroundColor: 'red',
    });
  };
  return {
    showSuccess,
    showError,
  };
};
