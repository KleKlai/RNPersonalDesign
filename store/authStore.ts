import { create } from 'zustand';

export interface AuthState {
  user: string | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null, // Store the logged-in user
  isAuthenticated: false, // Flag to indicate if user is authenticated
  login: () => {
    // Implement login logic
    // Update user and isAuthenticated state
  },
  logout: () => {
    // Implement logout logic
    // Reset user and isAuthenticated state
  },
}));

export default useAuthStore;