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

export const produtos = [
	{
		titulo: "Lancamentos",
		desc: "alguma coisa falando sobre",
		image:
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw14e915ab/1_front_750/00446561-01.jpg",
		size: "P",
		preco: 20.0,
		details: [
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw14e915ab/1_front_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw14e915ab/1_front_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwb81a6bb6/2_side_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw23ab2d05/3_back_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw3257abbb/4_full_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw87645e53/6_flat_750/00446561-01.jpg",
		],
	},
	{
		titulo: "Outlet",
		desc: "alguma coisa falando sobre",
		image:
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw428f0823/1_front_750/00446910-01.jpg",
		size: "M",
		preco: 20.0,
		details: [
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw7d823abc/1_front_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw7d823abc/1_front_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwd37af2e6/2_side_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw4b3ea1a2/3_back_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw4b3ea1a2/3_back_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw89ef7fc6/5_detail_750/00448745-01.jpg",
		],
	},
	{
		titulo: "Lancamentos",
		desc: "alguma coisa falando sobre",
		image:
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw7d823abc/1_front_750/00448745-01.jpg",
		size: "P",
		preco: 20.0,
		details: [
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw14e915ab/1_front_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw14e915ab/1_front_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwb81a6bb6/2_side_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw23ab2d05/3_back_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw3257abbb/4_full_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw87645e53/6_flat_750/00446561-01.jpg",
		],
	},
	{
		titulo: "Outlet",
		desc: "alguma coisa falando sobre",
		image:
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwcd12ad75/1_front_750/00445511-04.jpg",
		size: "M",
		preco: 20.0,
		details: [
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw7d823abc/1_front_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw7d823abc/1_front_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwd37af2e6/2_side_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw4b3ea1a2/3_back_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw4b3ea1a2/3_back_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw89ef7fc6/5_detail_750/00448745-01.jpg",
		],
	},
	{
		titulo: "Lancamentos",
		desc: "alguma coisa falando sobre",
		image:
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw39a324f1/1_front_750/00449135-03.jpg",
		size: "P",
		preco: 20.0,
		details: [
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw14e915ab/1_front_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw14e915ab/1_front_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwb81a6bb6/2_side_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw23ab2d05/3_back_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw3257abbb/4_full_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw87645e53/6_flat_750/00446561-01.jpg",
		],
	},
	{
		titulo: "Outlet",
		desc: "alguma coisa falando sobre",
		image:
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw24e461e2/1_front_750/00443424-04.jpg",
		size: "M",
		preco: 20.0,
		details: [
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw7d823abc/1_front_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw7d823abc/1_front_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwd37af2e6/2_side_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw4b3ea1a2/3_back_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw4b3ea1a2/3_back_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw89ef7fc6/5_detail_750/00448745-01.jpg",
		],
	},
	{
		titulo: "Lancamentos",
		desc: "alguma coisa falando sobre",
		image:
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw6b563697/1_front_750/00441344-02.jpg",
		size: "P",
		preco: 20.0,
		details: [
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw14e915ab/1_front_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw14e915ab/1_front_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwb81a6bb6/2_side_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw23ab2d05/3_back_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw3257abbb/4_full_750/00446561-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw87645e53/6_flat_750/00446561-01.jpg",
		],
	},
	{
		titulo: "Outlet",
		desc: "alguma coisa falando sobre",
		image:
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwc6f1eb45/1_front_750/00442929-01.jpg",
		size: "M",
		preco: 20.0,
		details: [
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw7d823abc/1_front_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw7d823abc/1_front_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwd37af2e6/2_side_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw4b3ea1a2/3_back_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw4b3ea1a2/3_back_750/00448745-01.jpg",
			"https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw89ef7fc6/5_detail_750/00448745-01.jpg",
		],
	},
];
