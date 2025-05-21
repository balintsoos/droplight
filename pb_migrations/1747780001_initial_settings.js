migrate((app) => {
  const settings = app.settings();

  // for all available settings fields you could check
  // /jsvm/interfaces/core.Settings.html
  settings.meta.appName = "Droplight";
  settings.meta.appURL = "http://localhost:8090";
  settings.logs.maxDays = 2;
  settings.logs.logAuthId = true;
  settings.logs.logIP = false;

  app.save(settings);
});
