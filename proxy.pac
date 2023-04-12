function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return "DIRECT";
  } else {
    return "PROXY 192.168.0.123:10808;SOCKS5 192.168.0.123:10809; DIRECT";
  }
}
