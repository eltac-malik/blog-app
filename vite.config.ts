import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));
  const serverPort = process.env.VITE_APP_PORT || 5173;

  return defineConfig({
    plugins: [react()],
    server: {
      port: +serverPort
    }
  });
};
