import { StyleSheet, ViewStyle, TextStyle } from "react-native"

import { spacing, color } from "../../theme"

export const SettingScreenHeaderStyle = StyleSheet.create({
  ButtonsContainer: {
    alignItems: "flex-end",
    marginTop: spacing[4],
  } as ViewStyle,
  QRCodeButton: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[2],
    width: 44,
  } as ViewStyle,
  Root: {
    padding: 24,
  } as ViewStyle,
})

export const SettingScreenUserInfoStyle = StyleSheet.create({
  DisplayName: {
    color: color.palette.white,
    fontSize: 28,
    fontWeight: "500",
  } as TextStyle,
  Identity: {
    marginLeft: 12,
  } as ViewStyle,
  Root: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  UserID: {
    color: color.palette.white,
    opacity: 0.6,
    fontSize: 12,
  } as TextStyle,
})
