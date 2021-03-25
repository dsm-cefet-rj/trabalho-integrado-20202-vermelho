import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './Menu.css';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="Menu">
      
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <div className='menu-texto'>Menu</div>
      </Button>
        <div id= "titulo">Hotelaria 5 Estrelas!</div>
      <div id="imagem">
        <img src="/images/hotelaria-slogan.jpg"></img>
      </div>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href='/registrar'>Registrar</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='/cardapio'>Cardápio</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='/cria-cardapio'>Criar Cardápio</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='/realiza-pedido'>Fazer Pedido</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='/cria-refeicao'>Criar Refeição</a></MenuItem>
        <MenuItem onClick={handleClose}> <a href='/pedidos-recebidos'> Pedidos </a></MenuItem>
      </Menu>
    </div>
  );
}