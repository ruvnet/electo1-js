{pkgs}: {
  deps = [
    pkgs.openssl
    pkgs.libxcrypt
    pkgs.glibcLocales
    pkgs.postgresql
  ];
}
