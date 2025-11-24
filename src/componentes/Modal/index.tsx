import React, { useRef } from "react";
import {
  ButtonGroup,
  CloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
} from "./style";
import Botao from "../Botao";

interface ModalProps {
  icon: React.ReactNode;
  titulo: string;
  children: React.ReactNode;
  aoClicar: () => void;
}

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

const Modal = ({ icon, titulo, children, aoClicar }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <ModalOverlay>
      <ModalContainer ref={dialogRef}>
        <ModalHeader>
          <div>
            {icon}
            {titulo}
          </div>
          <CloseButton>x</CloseButton>
        </ModalHeader>
        {children}
        <ButtonGroup>
          <Botao $variante="secundario">Cancelar</Botao>
          <Botao $variante="primario" onClick={aoClicar}>
            Adicionar
          </Botao>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
