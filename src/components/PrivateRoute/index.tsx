import { Navigate } from 'react-router-dom';
import { JSX, useContext } from 'react';
import { InfoUserContext } from '@/contexts/InfoUserContext';

interface PrivateRouteProps {
  element: JSX.Element;
  path?: string;
}

export function PrivateRoute({ element }: PrivateRouteProps) {
  const { profile } = useContext(InfoUserContext);

  // Verifica se o perfil do usuário existe, se não redireciona para a página de login
  return profile.id ? (
    element
  ) : (
    <Navigate to="/auth/signin" />
  );
}