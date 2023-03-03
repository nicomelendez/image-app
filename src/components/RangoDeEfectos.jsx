import useCloudinary from "@/hooks/useCloudinary";
import useEditor from "@/hooks/useEditor";
import Image from "next/image";
import Swal from "sweetalert2";
import { IconsMagic } from "./Icons";
import Overlay from "./Overlay";

export default function RangoDeEfectos() {
  const {
    datosDeImagen,
    cambiarProcesoDeImagen,
    cambiarImagenModificada,
    largo,
    alto,
    blurMedida,
    blurId,
    cambiarLargo,
    cambiarAlto,
    cambiarLetras,
    cambiarSizeLetras,
    letras,
    sizeLetra,
    titulo,
    cambiarTitulo,
    cambiarSizeFuente,
    sizeFuente,
    accion,
    cambiarTamAvatar,
    tamAvatar,
    restablecerInputs
  } = useEditor();
  const {
    filtroGris,
    filtroBlur,
    filtroSacarFondo,
    filtroSize,
    filtroAvatar,
    filtroPrimavera,
    filtroInvierno,
    filtroOtnio,
    filtroMejorar,
    filtroTitulo,
    pixelearZona,
  } = useCloudinary();
  
  const handlerGris = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroGris(datosDeImagen);
    cambiarImagenModificada(imagenEditada);
    restablecerInputs()
  };
  const handlerMejorar = () => {
    return Swal.fire({
      icon: "info",
      title: "En construcción",
      text: "Disponible a la brevedad!",
    });
    // cambiarProcesoDeImagen(true);
    // const imagenEditada = filtroMejorar(datosDeImagen);
    // cambiarImagenModificada(imagenEditada);
    // restablecerInputs()
  };
  const handlerPixel = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = pixelearZona(datosDeImagen);
    cambiarImagenModificada(imagenEditada);
    restablecerInputs()
  };

  const handlerPrimavera = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroPrimavera(datosDeImagen);
    cambiarImagenModificada(imagenEditada);
    restablecerInputs()
  };

  const handlerOtnio = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroOtnio(datosDeImagen);
    cambiarImagenModificada(imagenEditada);
    restablecerInputs()
  };

  const handlerInvierno = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroInvierno(datosDeImagen);
    cambiarImagenModificada(imagenEditada);
    restablecerInputs()
  };

  const handlerSacarFondo = () => {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Deshabilitado hasta el día de la entrega, me quedan pocos usos para recortar!",
    });
    // cambiarProcesoDeImagen(true);
    // const imagenEditada = filtroSacarFondo(datosDeImagen);
    // cambiarImagenModificada(imagenEditada);
    // restablecerInputs()
  };

  const handlerAvatar = () => {
    if (tamAvatar === "" || tamAvatar === "Elige el tamaño") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes elegir un tamaño!",
      });
    }
    if (letras && !sizeLetra) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes elegir un tamaño para el texto!",
      });
    }
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroAvatar(
      datosDeImagen,
      tamAvatar,
      letras,
      sizeLetra
    );
    cambiarImagenModificada(imagenEditada);
    restablecerInputs()
  };

  const handlerSize = () => {
    if (largo === 0 || alto === 0) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes elegir un tamaño!",
      });
    }
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroSize(datosDeImagen, largo, alto);
    cambiarImagenModificada(imagenEditada);
    restablecerInputs()
  };

  const handlerBlur = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroBlur(datosDeImagen, blurId);
    cambiarImagenModificada(imagenEditada);
    restablecerInputs()
  };
  const handlerCrearTitulo = () => {
    if (!sizeFuente) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes elegir un tamaño!",
      });
    }
    if (!titulo) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes escribir un texto!",
      });
    }
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroTitulo(datosDeImagen, titulo, sizeFuente);
    cambiarImagenModificada(imagenEditada);
    restablecerInputs()
  };

  const estilosButton =
    "mx-auto w-4/5 px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-600 font-semibold rounded-lg text-white ";
  const estilosContent =
    "min-w-[200px] max-h-[470px] bg-slate-100 mx-auto px-6 p-2 sm:p-4 w-4/5 rounded-xl shadow flex flex-col items-center space-y-2 sm:space-y-5 text-[11px] sm:text-sm sombra";
  const estiloItem =
    "flex w-[80px] lg:w-auto gap-2 hover:underline hover:cursor-pointer";
  const estilosTitulos = "text-center font-bold text-sm sm:text-lg";
  const estiloP =
    "font-bold text-[10px] sm:text-sm text-center border-t border-black pt-2";
  const texto =
    "Todos los efectos se acumulan al momento de elegir uno para revertir el cambio utilice el botón deshacer.";

  if (accion === "Overlay") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Overlay</p>
        <div className="flex w-full flex-col items-center justify-start space-y-2 my-5">
          <Overlay />
        </div>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Pixelear") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Pixelear caras</p>
        <div className="flex w-full flex-col items-center justify-start space-y-2 my-5">
          <p>En proceso...</p>
          {/* <button className={estilosButton} onClick={handlerPixel}>
            Aplicar
          </button> */}
        </div>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Blur") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Añadir blur</p>
        <div className="flex flex-col items-center justify-start space-y-2 my-5">
          <label htmlFor="" className="text-black text-sm">
            Grado de blur <strong>{blurId}%</strong>
          </label>
          <input
            defaultValue="0"
            className=""
            type="range"
            min="0"
            max="100"
            onChange={blurMedida}
          />
          <button className={estilosButton} onClick={handlerBlur}>
            Aplicar
          </button>
        </div>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Avatar") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Crear un avatar</p>

        <p>Define las medidas</p>

        <select onChange={cambiarTamAvatar} className="py-2 text-center">
          <option>Elige el tamaño</option>
          <option value="100">100 x 100</option>
          <option value="200">200 x 200</option>
          <option value="300">300 x 300</option>
          <option value="400">400 x 400</option>
          <option value="500">500 x 500</option>
          <option value="600">600 x 600</option>
          <option value="700">700 x 700</option>
        </select>
        <div className="w-full">
          <p className="font-semibold text-center">Opcional</p>
          <label className="text-black">Texto</label>
          <input
            defaultValue=""
            className="w-full"
            placeholder="Ej: NM"
            onChange={cambiarLetras}
            type="text"
          />
        </div>
        <div className="w-full">
          <label className="text-black">Tamaño de fuente</label>
          <input
            defaultValue=""
            placeholder="Ej: 60"
            className="w-full"
            onChange={cambiarSizeLetras}
            type="number"
          />
        </div>
        <button className={estilosButton} onClick={handlerAvatar}>
          Aplicar
        </button>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Ajustar") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Modificar tamaño</p>
        <div>
          <label className="text-black">Largo</label>
          <input
            defaultValue=""
            className="w-full"
            placeholder="Ej: 300"
            onChange={cambiarLargo}
            type="number"
          />
        </div>
        <div>
          <label className="text-black">Alto</label>
          <input
            defaultValue=""
            className="w-full"
            placeholder="Ej: 200"
            onChange={cambiarAlto}
            type="number"
          />
        </div>
        <button className={estilosButton} onClick={handlerSize}>
          Aplicar
        </button>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Recortar") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Recortar fondo</p>
        <button className={estilosButton} onClick={handlerSacarFondo}>
          Aplicar
        </button>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Efectos") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Efectos</p>
        <ul className="flex flex-row flex-wrap gap-5 lg:gap-0 lg:items-start justify-around items-center w-full lg:flex-col lg:space-y-5 pt-4 font-semibold px-4">
          <li>
            <button className={estiloItem} onClick={handlerGris}>
              <Image src="/assets/gris.png" width={20} height={20} alt="gris" />
              Gris
            </button>
          </li>
          <li>
            <button className={estiloItem} onClick={handlerPrimavera}>
              <Image
                src="/assets/primavera.png"
                width={20}
                height={20}
                alt="gris"
              />
              Primavera
            </button>
          </li>
          <li>
            <button className={estiloItem} onClick={handlerOtnio}>
              <Image
                src="/assets/otonio.png"
                width={20}
                height={20}
                alt="gris"
              />
              Otoño
            </button>
          </li>
          <li>
            <button className={estiloItem} onClick={handlerInvierno}>
              <Image
                src="/assets/invierno.png"
                width={20}
                height={20}
                alt="gris"
              />
              Invierno
            </button>
          </li>
        </ul>
        <button
          className="mx-auto flex gap-2 px-3 py-3 bg-gradient-to-r from-blue-500 to-violet-600 font-semibold rounded-full text-white hover:scale-105"
          onClick={handlerMejorar}
        >
          <IconsMagic />
          Mejorar
        </button>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Texto") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Crea un texto texturado</p>
        <div className="w-full">
          <label className="text-black">Texto</label>
          <input
            defaultValue=""
            className="w-full"
            placeholder="Ej: MiduDev"
            onChange={cambiarTitulo}
            type="text"
          />
        </div>
        <div className="w-full">
          <label className="text-black">Tamaño de fuente</label>
          <input
            defaultValue=""
            placeholder="Ej: 120"
            className="w-full"
            onChange={cambiarSizeFuente}
            type="number"
          />
        </div>
        <button className={estilosButton} onClick={handlerCrearTitulo}>
          Crear
        </button>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  } else {
    return (
      <div className={estilosContent + " justify-start lg:pt-5"}>
        <p className="text-center">
          Eliga un efecto para comenzar a modificar su imagen.
        </p>
      </div>
    );
  }
}
