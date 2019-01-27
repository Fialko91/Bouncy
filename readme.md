<h1>Start HTML Template</h1>

<p>
	<img src="http://4.bp.blogspot.com/-cbJwMFZQkP0/VlLva-AtPFI/AAAAAAAAA0M/ShnxDDLujqE/s1600/hd-wallpapers-desktop%2B%252812%2529.jpg">
</p>

<p>Оптимизированным HTML5 шаблон для Google PageSpeed ​​с использованием Bootstrap (сетка), Gulp, Sass, Browsersync, Autoprefixer, Clean-CSS, Uglify, Vinyl-FTP, Bower и поддержки Bourbon. Шаблон содержит файл <strong>.htaccess</strong> с правилами кэширования для веб-сервера.</p>

<p>Кроссбраузерная совместимость: IE9 +.</p>

<p>Шаблон использует <strong>Sass</strong> и структуру проекта с исходным кодом в каталоге <strong>app/</strong> / и конечной папке <strong>dist/</strong> /, который содержит готовый проект с оптимизированным HTML, CSS и JS</p>

<h2>Как использовать HTML шаблон</h2>

<ol>
	<li>Установить Node Modules: <strong>npm i</strong>;</li>
	<li>Запустить шаблон: <strong>gulp</strong>.</li>
</ol>

<h2>Gulp tasks:</h2>

<ul>
	<li><strong>gulp</strong>: запуск дефолтного gulp таска (sass, js, watch, browserSync) для разработки;</li>
	<li><strong>build</strong>: сборка проекта в папку <strong>dist</strong> (очистка, удаление всего лишнего);</li>
	<li><strong>deploy</strong>: выгрузка проекта на рабочий сервер из папки <strong>dist</strong> по FTP;</li>
	<li><strong>clearcache</strong>: очистка кеша gulp. Полезно для очистки кеш картинок и закешированных путей.</li>
</ul>

<h2>Правила работы со стартовым HTMl шаблоном</h2>

<ol>
	<li>Для установки новой jQuery библиотеки просто выполните в терминале команду  "<strong>bower i plugin-name</strong>". Библиотека автоматически будет размещена в папке <strong>app/libs</strong>. Bower должен быть установлен в вашей системе. Для установки Bower просто выполните команду npm i -g bower в трминале. После этого укажите все ссылки на скрипты jQuery библиотек в таске <strong>'libs'</strong> (gulpfile.js);</li>
</ol>

<p>Шаблон основан на <a href="http://webdesign-master.ru/blog/tools/2016-08-19-optimizedhtml.html" target="_blank">стартовом шаблоне webdesign-master.ru</a>