export const makeRequestDart = `
// Ce fichier gère les requêtes HTTP de l'application mobile par rapport à l'API

import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:jkwiz/config/app_properties.dart';
import 'package:dio/dio.dart';

Future<bool> makeDioGetRequest(String url) async {
  final dio = Dio();
  final response = await dio.get(
    '$apiUrl$url',
    options: Options(followRedirects: false),
  );
  return response.statusCode == 200 || response.statusCode == 201;
}

/// permet de faire des requêtes Http de type GET
Future<bool> makeGetRequest(String url) async {
  final Uri uri = Uri.parse('$apiUrl$url');
  final response = await http.get(uri);
  return response.statusCode == 200 || response.statusCode == 201;
}

typedef FromJsonFunction<T> = T Function(Map<String, dynamic> json);

/// permet de faire des liste d'éléments à partir de requêtes Http de type GET
Future<List<T>> getListModel<T>(
  String url,
  T Function(Map<String, dynamic> json) fromJsonFunction,
) async {
  final Uri uri = Uri.parse('$apiUrl$url');
  final response = await http.get(uri);

  if (response.statusCode == 200) {
    final dynamic responseData = json.decode(response.body);

    if (responseData is List) {
      return responseData
          .map<T>((data) => fromJsonFunction(data as Map<String, dynamic>))
          .toList();
    } else if (responseData is Map<String, dynamic> &&
        responseData.containsKey('results')) {
      return (responseData['results'] as List)
          .map<T>((data) => fromJsonFunction(data as Map<String, dynamic>))
          .toList();
    } else {
      throw Exception("Format de données non supporté");
    }
  } else {
    throw Exception("Erreur lors de la récupération des données");
  }
}

/// permet de faire des requêtes Http de type POST
Future<bool> makePostRequest(String url, Map<String, dynamic> body) async {
  final Uri uri = Uri.parse('$apiUrl$url');
  final String requestBody = jsonEncode(body);

  final response = await http.post(
    uri,
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
  );

  return response.statusCode == 200 || response.statusCode == 201;
}

/// permet de faire des requêtes Http de type POST
Future<bool> makePostRequest2(String url) async {
  final Uri uri = Uri.parse('$apiUrl$url');

  final response = await http.post(
    uri,
    headers: {
      'Content-Type': 'application/json',
    },
  );

  return response.statusCode == 200 || response.statusCode == 201;
}

/// permet de faire des requêtes Http de type PUT
Future<bool> makePutRequest(String url, Map<String, dynamic> body) async {
  final Uri uri = Uri.parse('$apiUrl$url');
  final String requestBody = jsonEncode(body);

  final response = await http.put(
    uri,
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
  );

  return response.statusCode == 200 || response.statusCode == 201;
}

/// permet de faire des requêtes Http de type PATCH
Future<bool> makePatchRequest(String url, Map<String, dynamic> body) async {
  final Uri uri = Uri.parse('$apiUrl$url');
  final String requestBody = jsonEncode(body);

  final response = await http.patch(
    uri,
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
  );

  return response.statusCode == 200 || response.statusCode == 201;
}

/// permet de faire des requêtes Http de type DELETE
Future<bool> makeDeleteRequest(String url) async {
  final Uri uri = Uri.parse('$apiUrl$url');
  final response = await http.delete(uri);
  return response.statusCode == 200 || response.statusCode == 201;
}

/// permet de faire des requêtes Http de type DELETE contenant un body
Future<bool> makeDeleteBodyRequest(String url, dynamic body) async {
  final Uri uri = Uri.parse('$apiUrl$url');
  final String requestBody = jsonEncode(body);

  final response = await http.delete(
    uri,
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
  );
  return response.statusCode == 200 || response.statusCode == 201;
}
`
