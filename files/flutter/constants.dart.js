export const constantsDart = `
// Constantes de l'application

import 'package:flutter/material.dart';
import 'package:jkwiz/services/utils/size_config.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

// Colors

const Color juniorColor = Color(0xff574947);
const Color kryptonianColor = Color(0xffdd6956);
const Color whizColor = Color(0xffff9523);
const Color intrepidColor = Color(0xff4497bd);
const Color zenithColor = Color(0xfff290b0);

const textColor = Color(0xFF757575);
const loadingColor = Color(0x00474646);

// Paddings

const double defaultPadding = 16.0;
const EdgeInsets bodyPadding = EdgeInsets.symmetric(
  vertical: 10,
  horizontal: 20,
);
const EdgeInsets bottomSheetPadding = EdgeInsets.symmetric(
  horizontal: 15,
  vertical: 15,
);

// Animations

const defaultDuration = Duration(milliseconds: 250);
const kAnimationDuration = Duration(milliseconds: 200);

// Styles

final headingStyle = TextStyle(
  fontSize: getProportionateScreenWidth(28),
  fontWeight: FontWeight.bold,
  color: Colors.black,
  height: 1.5,
);

// Form Error

const String kPseudoNullError = "Entrez votre pseudo svp";
const String kPassNullError = "Entrez un mot de passe svp";
const String kMatchPassError = "Le mot de passe est incorrect";

// Decorations

final otpInputDecoration = InputDecoration(
  contentPadding: EdgeInsets.symmetric(
    vertical: getProportionateScreenWidth(15),
  ),
  border: outlineInputBorder(),
  focusedBorder: outlineInputBorder(),
  enabledBorder: outlineInputBorder(),
);

OutlineInputBorder outlineInputBorder() {
  return OutlineInputBorder(
    borderRadius: BorderRadius.circular(getProportionateScreenWidth(15)),
    borderSide: const BorderSide(color: textColor),
  );
}

// DASHBOARD

const Color primaryColor = Color(0xFF3A3A3A);
const Color whiteColor = Color(0xFFFFFFFF);
const Color greyColor = Color(0xFF757575);

// Text styles

final largeTextStyle = GoogleFonts.plusJakartaSans(
  fontSize: 20.sp,
  fontWeight: FontWeight.w600,
  color: const Color(0xFF160D07),
);
final smallTextStyle = GoogleFonts.plusJakartaSans(
  fontSize: 13.sp,
  fontWeight: FontWeight.w400,
  color: const Color(0xFF160D07),
);
final mediumTextStyle = GoogleFonts.plusJakartaSans(
  fontSize: 16.sp,
  fontWeight: FontWeight.w600,
  color: const Color(0xFF160D07),
);
final xSmallTextStyle = GoogleFonts.plusJakartaSans(
  fontSize: 14.sp,
  fontWeight: FontWeight.w400,
  color: const Color(0xFF767D88),
);
`
