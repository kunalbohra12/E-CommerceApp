import { View, Text, Modal, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import styles from './LogoutComponentStyle'
import images from '../../utils/constants/Images'

interface Props {
    isVisible: boolean
    onClose: () => void
    onLogout: () => void
}

const LogoutComponent = ({ isVisible, onClose, onLogout }: Props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <Pressable style={styles.centeredContainer} onPress={onClose}>
                <Pressable style={styles.modalContainer} onPress={() => { }}>
                    <Image source={images.LOGOUT_ICON} style={styles.modalIcon} />
                    <Text style={styles.modalTxt}>Logout?</Text>
                    <Text style={styles.modalSubTxt}>Are you sure you want to logout?</Text>

                    <View style={styles.columnContainer}>
                        <TouchableOpacity style={styles.highlightBtn} onPress={onLogout}>
                            <Text style={styles.highlightTitle}>Yes, Logout</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.borderBtn} onPress={onClose}>
                            <Text style={styles.btnTitle}>No, Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    )
}

export default LogoutComponent
