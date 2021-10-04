import styled from "styled-components/native";

export const Bg = styled.KeyboardAvoidingView`
    flex: 1;
	align-items: center;
	justify-content: center;
	background-color: #353535;
`

export const ContainerLogo = styled.View`
    flex: 0.4;
	justify-content: center;
`
export const Input = styled.TextInput`
    background-color: rgba(100,100,100,.3);
	width: 90%;
		font-size: 17px;
		border-radius: 18px;
		padding: 10px;
		padding-left: 20px;
		margin-top: 15px;
` 
export const BtnSubmit = styled.TouchableOpacity`
    background-color: #35aaff;
		width: 90%;
		height: 45px;
		align-items: center;
		justify-content: center;
		border-radius: 18px;
		margin-top: 15px;
` 
export const SubmitText = styled.Text`
    color: #fff;
    font-size: 18px;
` 

export const BtnRegister = styled.TouchableOpacity`
    margin-top: 15px;
    margin-bottom: 50px;
`
export const BtnNewAccount = styled.TouchableOpacity`
    border-radius: 18px;
		border-width: 1px;
		border-color: #191919;
		padding: 15px;
		width: 90%;
		align-items: center;
` 