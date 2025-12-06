import React, { createContext, useEffect, useState } from "react";
import { IUsuario } from "../types";
import { criarUsuario, obterUsuario } from "../api";

interface AppContextType {
  usuario: IUsuario | null;
  setUsuario: (usuario: IUsuario | null) => void;
  criaUsuario: (usuario: Omit<IUsuario, "id">) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);

  const carregaDadosUsuario = async () => {
    try {
      const usuario = await obterUsuario();
      if (usuario.length > 0) {
        setUsuario(usuario[0]);
      } else {
        setUsuario(null);
      }
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
      setUsuario(null);
    }
  };

  useEffect(() => {
    carregaDadosUsuario();
  }, []);

  const criaUsuario = async (usuario: Omit<IUsuario, "id">) => {
    try {
      const novoUsuario = await criarUsuario(usuario);
      setUsuario(novoUsuario);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <AppContext.Provider value={{ usuario, setUsuario, criaUsuario }}>
      {children}
    </AppContext.Provider>
  );
};
