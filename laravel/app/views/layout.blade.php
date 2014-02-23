<!DOCTYPE html>
<html itemscope='itemscope' itemtype='http://schema.org/Product'>
<head>
    <title>Laravel + MongoDB Demo</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- bootstrap -->    
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
    <link href="/lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    
    <!-- open sans font -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

    <!-- font-family: 'Dosis', sans-serif; font-family: 'Nobile', sans-serif;-->
    <link href='http://fonts.googleapis.com/css?family=Dosis|Nobile' rel='stylesheet' type='text/css'>
    <link href='/css/style.css' rel="stylesheet">
    
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <script src="/lib/jquery/jquery.min.js"></script>
    <base href="/" />
    <meta name="fragment" content="!" />
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="cache-control" content="no-store" />
    <meta http-equiv="cache-control" content="must-revalidate" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
    <meta http-equiv="pragma" content="no-cache" />
</head>
<body>  
  
  <!-- Header -->  
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand cool-font" href="#">Laravel + MongoDB Demo</a>
      </div>
    </div><!-- /.container-fluid -->
  </nav>

  <div id="page">
    <ng-view></ng-view>
  </div>

  <!-- scripts libs -->
  <script src="/lib/bootstrap/dist/js/bootstrap.min.js"></script>

  <!--Angular -->
  <script src="/lib/angular/angular.js"></script>
  <script src="/lib/angular-cookies/angular-cookies.js"></script>
  <script src="/lib/angular-resource/angular-resource.js"></script>
  <script src="/lib/angular-loading-bar/build/loading-bar.min.js"></script>
  <script src="/lib/angular-route/angular-route.js"></script>

  <!--Angular UI-->
  <script src="/lib/angular-bootstrap/ui-bootstrap.js"></script>
  <script src="/lib/angular-bootstrap/ui-bootstrap-tpls.js"></script>
  <script src="/lib/angular-ui-utils/ui-utils.min.js"></script>

  <!-- Application Init -->
  <script src="/js/app.js"></script>
  <script src="/js/config.js"></script>
  <script src="/js/directives.js"></script>
  <script src="/js/filters.js"></script>
  
  <!-- Application Services -->
  <script src="/js/services/global.js"></script>
  <script src="/js/services/helpers.js"></script>
  
  <!-- Application Controllers -->
   <script src="/js/controllers/test.js"></script>
  
  <!-- Lets do it! -->
  <script src="/js/init.js"></script>
  <script src="/js/script.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>