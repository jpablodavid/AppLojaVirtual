import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Envio_Pagamento = () => {
    return(
        <View style={styles.container}>
            <View>
                <Text>
                    Dados do envio
                </Text>
            </View>
            <TouchableOpacity>
                
                <Text></Text>
                
            </TouchableOpacity>

            <View>
                <Text>
                    Dados de Pagamento
                </Text>
            </View>

            <View>
                <View>
                    <Text>
                        Detalhes do pedido
                    </Text>
                </View>
                <View>
                    <Text>
                        imagem e  Detalhes do pedido
                    </Text>
                </View>
                <View>
                    <Text>
                        frete e valores
                    </Text>
                </View>

            </View>

            <TouchableOpacity>
                <Text>
                    comprar/valor do pedido
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default Envio_Pagamento;