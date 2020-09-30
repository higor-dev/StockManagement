import React from 'react';
import { createProduct } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './UserPhotoPost.module.css';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const product = useForm();
  const type = useForm();
  const quantity = useForm('number');
  const price = useForm('money');
  // const [img, setImg] = React.useState({});
  const image = useForm();
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image.value);
    formData.append('productName', product.value);
    formData.append('quantity', +quantity.value);
    formData.append('price', Number(price.value.replace(/[$,]/g, '.')));
    formData.append('type', type.value);
    formData.append('companyId', 1);

    const obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });

    const oi = JSON.stringify({
      productName: product.value,
      quantity: +quantity.value,
      price: Number(price.value.replace(/[$,]/g, '.')),
      type: type.value,
      companyId: 1,
      image: image.value,
    });

    const json = JSON.stringify(obj);
    console.log(json);

    const token = window.localStorage.getItem('token');
    const { url, options } = createProduct(oi, token);
    request(url, options);
  }

  // async function handleImgChange({ target }) {
  //   const file = target.files[0];
  //   const base64 = await convertBase64(file);
  //   console.log(base64);
  //   setImg({
  //     preview: URL.createObjectURL(target.files[0]),
  //     raw: target.files[0],
  //     base64: base64,
  //   });
  // }

  // if we ever want to use base64 again.
  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       resolve(error);
  //     };
  //   });
  // };

  return (
    <>
      <section className={`${styles.photoPost} animeLeft`}>
        <form onSubmit={handleSubmit}>
          <Input
            label="Produto"
            maxLength="20"
            type="text"
            name="productName"
            {...product}
          />
          <Input label="Imagem" type="text" name="image" {...image} />
          <Input
            label="Categoria"
            maxLength="20"
            type="text"
            name="type"
            {...type}
          />
          <Input
            label="Quantidade"
            type="number"
            pattern="\d*"
            maxLength="4"
            name="quantity"
            {...quantity}
          />
          <Input label="Preço" type="text" name="price" {...price} />
          {/* <input
            className={styles.file}
            type="file"
            name="img"
            id="image"
            onChange={handleImgChange}
          /> */}
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          <Error error={error} />
        </form>
        {/* <div>
          {img.preview && (
            <div
              className={styles.preview}
            // style={{ backgroundImage: `url(' ${img.preview}')` }}
            >
              <img src={img.base64} alt="" />
            </div>
          )}
        </div> */}
      </section>
    </>
  );
};

export default UserPhotoPost;
