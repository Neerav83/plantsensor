<template>
<html lang="SE" dir="ltr" data-locale="SE" class="">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default">

<title>Fuktstatus</title>
</head>
<body>
  <Header msg="Plantsensor" />
  <Container msg="Body" />
</body>
</html>
</template>

<script>
import Header from './components/header.vue'
import Container from './components/body.vue'

export default {
  name: 'App',
  components: {
    'Header':Header,
    'Container':Container	

  }
}
</script>


