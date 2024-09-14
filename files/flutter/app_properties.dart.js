export const appPropertiesDart = (projectName) => `

import 'package:${projectName}/config/config.dart';

const String port = localPort;
const String ipAdress = localIpAdress;

/// adresse du serveur
// const String server = 'http://$ipAdress:$port/';
const String server = 'https://${projectName}-api.justekouassi.com/';
const String apiUrl = '\${server}quiz/';

/// chemin des images de l'API
const String apiStaticPath = "\${server}static/media/";

/// adresse du canal web socket
const String webSocketChannel = 'ws://$ipAdress:$port/ws';

const String devName = "Juste Kouassi";
`
