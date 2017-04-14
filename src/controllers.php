<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

//Request::setTrustedProxies(array('127.0.0.1'));

$app->get('/', function () use ($app) {
    return $app['twig']->render('index.html.twig', array());
})
->bind('homepage')
;

$app->get('/capitulo4', function() use ($app) {
    return $app['twig']->render('capitulo4.html.twig', array());
})->bind('capitulo4');

$app->get('/capitulo5', function() use ($app) {
    return $app['twig']->render('capitulo5.html.twig', array());
})->bind('capitulo5');

$app->get('/capitulo6', function() use ($app) {
    return $app['twig']->render('capitulo6.html.twig', array());
})->bind('capitulo6');

$app->post('/api/capitulo6', function() use ($app) {
    $response = new Response(json_encode($_POST));
    $response->headers->set('Content-Type', 'application/json');

    return $response;
})->bind('apiCapitulo6');

$app["cors-enabled"]($app);

$app->error(function (\Exception $e, Request $request, $code) use ($app) {
    if ($app['debug']) {
        return;
    }

    // 404.html, or 40x.html, or 4xx.html, or error.html
    $templates = array(
        'errors/'.$code.'.html.twig',
        'errors/'.substr($code, 0, 2).'x.html.twig',
        'errors/'.substr($code, 0, 1).'xx.html.twig',
        'errors/default.html.twig',
    );

    return new Response($app['twig']->resolveTemplate($templates)->render(array('code' => $code)), $code);
});
