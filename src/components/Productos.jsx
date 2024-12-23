import React, { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom"; 
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/Producto.css";
import ReactPaginate from "react-paginate";
import { IconShoppingCart, IconTagMinus } from "@tabler/icons-react";
import { IconShoppingCartX } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
//Simport Carrito from "./Carrito";

const Product = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/productos")
      .then((response) => {
        console.log(response);

        setProductos(response.data.respuesta);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const itemsPerPage = 6;
  // Aquí usamos compensaciones de artículos; También podríamos usar desplazamientos de página
  // siguiendo la API o los datos con los que estás trabajando.
  const [itemOffset, setItemOffset] = useState(0);
  const firstProductRef = useRef(null);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = productos.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productos.length / itemsPerPage);

  // Invocar cuando el usuario hace click para solicitar otra página.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productos.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);

    if (firstProductRef.current) {
      firstProductRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }; //se encarga de manejar el evento cuando un usuario clickea para una nueva pagina(en el componente paginacion), y se la muestra en el producto 0 rapidamente.

  useEffect(() => {
    // Desplazar la vista hacia el primer producto cuando la página inicializa
    if (firstProductRef.current) {
      firstProductRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [itemOffset]);

  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

  const addCart = (producto) => {
    items.push(producto);
    if (producto.stock > 0) {
      // Restar uno del stock
      producto.stock -= 1;
      if (producto.stock == producto.minimo) {
        alert(" EL STOCK ES MINIMO ");
        // Construir el mensaje de WhatsApp
        const whatsappMensaje = encodeURIComponent(
          `Hola, buenos días \nPortuese Hermanos, quisiera informarle que del producto:
          \nID: ${producto.id}\nNombre: ${producto.nombre}\n
          Descripción: ${producto.descripcion}\ntiene un Stock minimo,
          \nPor favor REPONER URGENTE, muchas gracias!!`
        );
        // Redirigir a WhatsApp
        window.open(
          `https://wa.me/3816977245?text=${whatsappMensaje}`,
          "_blank"
        );
      }
      if (producto.stock == 0) {
        alert("SIN STOCK DISPONIBLE");
      }
      
    } else {
      // Mostrar una alerta si ya no hay stock
      alert("SIN STOCK DISPONIBLE");
    }
  };

  const deletCart = (producto, index) => {
    producto.stock += 1;
    console.log("STOCK: ", producto); //cuando se elimina un producto de carrito, se incrementa el stock +1
    // Crear una copia del array de items
    const updatedItems = [...items];
    // Eliminar el producto del array
    updatedItems.splice(index, 1);
    // Actualizar el estado
    setItems(updatedItems);
    // Comprobar el nuevo estado del carrito
    console.log("STOCK: ", updatedItems);
  };

  const comprarCart = (producto, index)=>{
    if (producto.stock > 0) {
      // Restar uno del stock
      producto.stock -= 1;
      if (producto.stock < producto.minimo) {
        alert("POR FAVOR, CONTACTENOS PARA INFORMACION SOBRE LOS MEDIOS DE PAGO");
        // Construir el mensaje de WhatsApp
        const whatsappMensaje = encodeURIComponent(
          `Hola, buenos días \nPortuese Hermanos, quisiera informacion del producto:
          \nID: ${producto.id}\nNombre: ${producto.nombre}\n
          Descripción: ${producto.descripcion}\ si tiene en stock y formas de pago,
          \n muchas gracias!!`
        );
        // Redirigir a WhatsApp
        window.open(
          `https://wa.me/3816977245?text=${whatsappMensaje}`,
          "_blank"  //verifica si hay stock, si lo hay, redirige un mensaje a wp para comprarlo.
        );
      }
      else{

      }

    } else {
      // Mostrar una alerta si ya no hay stock
      alert("POR FAVOR, CONTACTENOS PARA INFORMACION SOBRE LOS MEDIOS DE PAGO");
    }
  }

  const getStock = (producto, index) => {
    return producto.stock;
  };

  const verCarrito = (producto) => {
    setShow(true);
  };

  const cerrarCarrito = () => {
    setShow(false);
  };

  const Carrito = (props) => {
    console.log(" ver carrito ", props);
    return (
      <div className="cart-container">
        <div className="cart-close">
          <Button
            variant="secondary"
            className="cart"
            onClick={() => props.cerrarCarrito()}
          >
            <IconShoppingCartX stroke={2} />
          </Button>
        </div>
        {props.items.length === 0 ? (
          <h2>CARRITO VACIO</h2>
        ) : (
          <div className="cart-items">
            {props.items.map((producto, index) => (
              <Card key={index} className="cart_Etiqueta">
                <Card.Img
                  className="cart-fixed-size-img"
                  variant="top"
                  src={producto.imagen}
                  alt={producto.nombre}
                />
                <Card.Body className="cart_Body">
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>{producto.descripcion}</Card.Text>
                  <Button
                    variant="primary"
                    className="cart"
                    onClick={() => props.deletCart(producto, index)}
                  >
                    <IconTrash stroke={2} />
                  </Button>
                  <Button
                    variant="secondary"
                    className="cart"
                    onClick={() => props.comprarCart(producto, index)}
                  >
                    COMPRAR
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div> /*Imprime los props en la consola.

Crea un contenedor del carrito.

Agrega un botón para cerrar el carrito.

Muestra un mensaje si el carrito está vacío.

Muestra los productos en el carrito con sus detalles.

Incluye botones para eliminar o comprar productos.
      */
    );
  };
  
  return (
    <>
      {show ? (
        <Carrito
          cerrarCarrito={cerrarCarrito}
          deletCart={deletCart}
          comprarCart={comprarCart}
          items={items}
        />
      ) : (
        <>
          <div className="containerCart">
            <Button
              variant="secondary"
              className="cart"
              onClick={() => verCarrito()}
            >
              <IconShoppingCart stroke={2} />
            </Button>
          </div>

          <div className="container">
            {currentItems.map((producto, index) => {
              const whatsappMensaje = encodeURIComponent(
                `Hola Buenos dias \n Portuese Hermanos, quisiera informacion acerca del producto: \nid: ${producto.id}\nnombre: ${producto.nombre}\ndescripcion: ${producto.descripcion}\nSi tiene en Stock y el precio por favor,\n desde ya muchas Gracias !!`
              );

              return (
                <Card
                  key={producto.id}
                  className="etiqueta"
                  ref={index === 0 ? firstProductRef : null}
                >
                  <Card.Img
                    className="fixed-size-img"
                    variant="top"
                    src={producto.imagen}
                    alt={producto.nombre}
                  />
                  <Card.Body className="">
                    <Card.Title>{producto.nombre}</Card.Title>
                    <div className="descripcion">
                      <Card.Text>{producto.descripcion}</Card.Text>
                    </div>
                    <a
                      href={`https://wa.me/3816977245?text=${whatsappMensaje}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <Button variant="primary">CONSULTAR</Button>
                    </a>
                    {getStock(producto) > 0 ? (
                      <Button
                        variant="primary"
                        onClick={() => addCart(producto)}
                        className="styled-button"
                      >
                        AGREGAR CARRITO {getStock(producto, index)}
                      </Button>
                    ) : (
                      <Button variant="secundary" className="styled-button">
                        SIN STOCK
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </div>
          <ReactPaginate
            containerClassName="pagination"
            pageClassName="page-item"
            breakLabel="..."
            nextLabel="Proximo>"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< Anterior"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </>
  );
};// en todo esto se muesta la lista de productos o el carrito, si show es verdadero se muestra el carrito, sino se muestra la lista de productos.

export default Product;
