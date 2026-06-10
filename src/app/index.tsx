import { Redirect } from 'expo-router';

export default function Index() {
  // Inicialmente redireciona para a tela de login
  return <Redirect href="/login" />;
}
