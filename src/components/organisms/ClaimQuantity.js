import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import platform from '../../helpers/platform'
import { useTranslation } from 'react-i18next'
import { Button, IconToggle } from 'react-native-material-ui'

function ClaimQuantity({ quantity, setQuantity, onPressClaim, maxQty }) {
  const { t } = useTranslation('order-new-details')
  return(
    <View style={styles.container}>
      <View style={styles.picker}>
        <Text style={styles.title}>{quantity}</Text>
        <View style={styles.col}>
          <IconToggle
            name="arrow-drop-up"
            color={platform.brandBlack}
            style={{ container: styles.icon }}
            maxOpacity={0}
            onPress={() =>
              setQuantity(Number(maxQty) === quantity ? quantity : quantity + 1)
            }
          />
          <IconToggle
            name="arrow-drop-down"
            color={platform.brandBlack}
            style={{ container: styles.icon }}
            maxOpacity={0}
            onPress={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}
        />
        </View>
      </View>
      <Button
        raised
        upperCase={false}
        text={t('claim task quantity')}
        onPress={onPressClaim}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderWidth: 1,
    borderColor: platform.brandBlack,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  picker: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: platform.brandBlack,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: platform.brandBlack,
    fontSize: 16,
    fontFamily: platform.fontMedium,
    flex: 1,
    textAlign: 'right',
    paddingRight: 5
  },
  col: {
    maxHeight: 40,
    borderLeftWidth: 1
  },
  icon: {
    width: 30,
    height: 20,
    top: -5
  }
})

export default ClaimQuantity
