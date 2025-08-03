import React from 'react';
import { useLocation } from 'react-router-dom';
import ChatExportador from '../../components/chatExportador';

const ChatPagina: React.FC = () => {
  const location = useLocation();
  const datosExportador = location.state;

  return <ChatExportador datos={datosExportador} />;
};

export default ChatPagina;
