// import React, { useState, useEffect } from "react";
// import firebase from "../firebaseConnection";


// const [produtos, setProdutos] = useState([]);

// useEffect(() => {
// 	const LoadProdutos = async () => {
// 		await firebase
// 			.database()
// 			.ref("produtos")
// 			.on("value", (snapshot) => {
// 				setProdutos([]);

// 				snapshot.forEach((item) => {
// 					let data = {
// 						key: item.key,
// 						img: item.val().imagem,
// 						titulo: item.val().titulo,
// 						preco: item.val().preco,
// 						size: item.val().imagensDetails[0].Sizes[0].SizeName,
// 						desc: item.val().descricao,
// 						imgDetails: item.val().imagensDetails[0].ProductImages,
// 					};

// 					setProdutos((oldArray) => [...oldArray, data]);
// 				});
// 			});
// 		setLoading(false);
// 	};

// 	LoadProdutos();
// }, []);
	
