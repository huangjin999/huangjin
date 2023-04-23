import{_ as e,p as i,q as n,Y as a}from"./framework-aa5c4115.js";const d={},s=a(`<h3 id="http常见的面试题" tabindex="-1"><a class="header-anchor" href="#http常见的面试题" aria-hidden="true">#</a> http常见的面试题：</h3><p>1）http常见的状态码有哪些 2）http常见的header有哪些 3）什么是restful API 4）说一下，http的缓存机制 5）什么是https 6）从浏览器地址栏输入一个网址，看到整个网页，发生了什么 7）什么是三次握手，什么是四次辉手 8）get请求和post请求的区别 9）重绘(repaint)和重排(回流reflow)是什么 10）cookie和session以及token的区别 11）常见的请求方式有哪些</p><h3 id="http常见的状态码有哪些" tabindex="-1"><a class="header-anchor" href="#http常见的状态码有哪些" aria-hidden="true">#</a> http常见的状态码有哪些：</h3><h3 id="http协议" tabindex="-1"><a class="header-anchor" href="#http协议" aria-hidden="true">#</a> http协议：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http请求：
  请求行
  请求头
  请求正文
http响应：
  响应行（http常见的状态码）
  响应头
  响应正文
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1xx  服务器收到请求
2xx  成功
3xx  重定向
4xx  客户端错误
5xx  服务器错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见的状态" tabindex="-1"><a class="header-anchor" href="#常见的状态" aria-hidden="true">#</a> 常见的状态：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http状态码有非常多，我们只说一些我们常用的，也是面试常考的。

200：成功（OK）
301：永久重定向（301 Moved Permanently），同时会返回一个location，写明了重定向的url
302: 临时重定向（Moved Temporarily），同时会返回一个location，写明了重定向的url，如短连接。
304：资源未修改过，表示缓存
404：未找到资源
403：没有权限，需要登录之后才能访问
500：服务器内部错误，如服务器代码异常
504：网关超时，如上游服务器连接失败
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要强调一下，这些状态码仅仅是一个规定，作为前后端开发者，我们需要自觉遵循这些规定。</p><hr><h3 id="常见的请求方式有哪些" tabindex="-1"><a class="header-anchor" href="#常见的请求方式有哪些" aria-hidden="true">#</a> 常见的请求方式有哪些：</h3><p>最早之前，常用的只有get和post: get：从服务器要资源 post: 把数据扔给服务器 现在，随着技术更新，以及RestFulAPI设计，有更多的请求方式： get：获取数据 post: 新建数据 patch/put: 更新数据 delete 删除数据 ....</p><hr><h3 id="什么是restful-api" tabindex="-1"><a class="header-anchor" href="#什么是restful-api" aria-hidden="true">#</a> 什么是Restful API:</h3><p>Restful API是前后端接口的一种设计规范，经过几年发展，现在已经被全面使用了。前端面试也是常考的。 传统API设计：把每个API当做一个功能 Restful API设计：把每个API当做一个资源标识</p><h3 id="如要获取一个列表" tabindex="-1"><a class="header-anchor" href="#如要获取一个列表" aria-hidden="true">#</a> 如要获取一个列表：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>传统API设计：/api/list?pageNumber=1  一个功能
Restful API设计：/api/list/1   一个资源 (不再使用url传参，使用method表示操作类型)  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要操作一个数据" tabindex="-1"><a class="header-anchor" href="#要操作一个数据" aria-hidden="true">#</a> 要操作一个数据：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>传统API设计：
  /api/create-blog   post请求
  /api/update-blog?id=110   post请求
  /api/get-blog?id=110   get请求
Restful API设计：
  /api/blog         post
  /api/blog/110     patch 
  /api/blog/110     get
  /api/blog/110     delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="http常见的header有哪些" tabindex="-1"><a class="header-anchor" href="#http常见的header有哪些" aria-hidden="true">#</a> http常见的header有哪些:</h3><h3 id="request-headers" tabindex="-1"><a class="header-anchor" href="#request-headers" aria-hidden="true">#</a> request headers:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Accept：浏览器可接收的资源类型
Accept-Encoding：浏览器可接收压缩算法
Accept-Language：浏览器可接收语言
Connection：keep-alive  一次TCP连接重复使用 
Cookie: 服务器给浏览器种植的cookie，后面浏览器去访问服务器，会自动带上cookie。
host: 请求的主机
User-Agent: 浏览器信息，服务器可以得到UA，判断是手机还是PC。
Content-Type: 发给服务器的资源类型，常见的有
  application/json，
  application/x-www-form-urlencoded，
  multipart/form-data，
  text-plain 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-headers" tabindex="-1"><a class="header-anchor" href="#response-headers" aria-hidden="true">#</a> response headers:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Content-Type: 响应的资源类型
Content-Length: 响应的资源大小
Content-Encoding: 压缩算法，如gzip
Set-Cookie: name=ml  给浏览器种植的cookie
....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义header" tabindex="-1"><a class="header-anchor" href="#自定义header" aria-hidden="true">#</a> 自定义header:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>有些接口，去调用时，需要自定义header，如axios中配置请求头，这个请求头带个token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="关于缓存的header" tabindex="-1"><a class="header-anchor" href="#关于缓存的header" aria-hidden="true">#</a> 关于缓存的header:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Response Headers: 
  Cache-Control
  Etag
  Expires
  Last-Modified
Request Headers: 
  If-Modified-Since
  If-None-Match
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>面试时，关于缓存的一些头，单独说。</p><hr><h3 id="http的缓存机制" tabindex="-1"><a class="header-anchor" href="#http的缓存机制" aria-hidden="true">#</a> http的缓存机制</h3><h3 id="为什么需要缓存" tabindex="-1"><a class="header-anchor" href="#为什么需要缓存" aria-hidden="true">#</a> 为什么需要缓存？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>让网页更快的显示出来，即提高性能。
计算机执行JS代码，非常快。
通过网络去加载资源非常慢，受到网络快慢的影响。 痛点：使用缓存，缓存网络资源。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是缓存" tabindex="-1"><a class="header-anchor" href="#什么是缓存" aria-hidden="true">#</a> 什么是缓存？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在某些情况下，资源不是每次都需要从服务器获取的，而是第一次获取之后缓存起来，后面再去请求时，直接走缓存，而不去请求服务器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="哪些资源需要缓存" tabindex="-1"><a class="header-anchor" href="#哪些资源需要缓存" aria-hidden="true">#</a> 哪些资源需要缓存？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1）html页面不需要缓存
2）业务数据不能缓存
3）静态资源是可以缓存，css,js,图片这些静态资源是可以缓存的。 复习webpack时，讲过contenthash,给静态资源加上一个唯一的hash值，内存不变，hash值不变，便于缓存了。内容变了，hash变了，避免缓存了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缓存策略" tabindex="-1"><a class="header-anchor" href="#缓存策略" aria-hidden="true">#</a> 缓存策略：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1）强制缓存（客户端缓存）
2）协商缓存（对比缓存）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制缓存" tabindex="-1"><a class="header-anchor" href="#强制缓存" aria-hidden="true">#</a> 强制缓存：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>是通过一个响应头来控制的，这个头叫Cache-Control。取值如下：
  max-age:31536000 单位是 s ，该资源被强制缓存 1 年
  no-cache 不使用强制缓存，但不妨碍使用协商缓存
  no-store 禁用使用缓存，每次都从服务器获取最新的资源
还有一头，也是用于强缓存，叫Expires 
  http1.0中的头，设置缓存过期时间的
  由于本地时间和服务器时间可能不一致，会导致很多问题
  已经被Cache-Control：max-age代替了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a> 协商缓存：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当强制缓存失效了，请求会被发送到服务器。此时，服务器也不一定每次都要返回资源，如果客户端资源还有效的话：

  1）Last-Modified(Response Headers) 和 If-Modified-Since（Resqeust Headers）
     Last-Modified 服务端返回资源的最后修改时间  a.txt 20230327 10:00:00
     If-Modified-Since 再次请求时带着最后修改时间  a.txt 20230327 10:00:00
     服务器根据时间判断资源是否被修改（如未被修改则返回 304，失败则返回新资源和新的缓存规则）
  2）Etag(Response Headers) 和 If-None-Match（Resqeust Headers）
     Etag 服务端返回的资源唯一标识（类似人的指纹，唯一，生成规则由服务器端决定，结果就是一个字符串）
     If-None-Match 再次请求时带着这个标识
     服务端根据资源和这个标识是否 match （成功则返回 304，失败则返回新资源和新的缓存规则）

  如果两者一起使用，则优先使用 Etag 规则。因为 Last-Modified 只能精确到秒级别。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="不同的操作对应不同的缓存策略" tabindex="-1"><a class="header-anchor" href="#不同的操作对应不同的缓存策略" aria-hidden="true">#</a> 不同的操作对应不同的缓存策略：</h3><p><strong>三种操作：</strong> 1）正常操作：地址栏输入url，点击链接，前进后退 2）手动刷新：F5或点击了刷新按钮 3）强制刷新：ctrl+F5</p><p><strong>上面的不同的操作缓存策略是不一样的：</strong> 1）正常操作：强制缓存有效，协商缓存有效 2）手动刷新：强制缓存失效，协商缓存有效 3）强制刷新，强制缓存失效，协商缓存失效</p><p>虽然缓存很好，但是在开发时，缓存有时候也很恶心，需要强制刷新</p><hr><h3 id="从浏览器地址栏输入一个网址-看到整个网页-发生了什么" tabindex="-1"><a class="header-anchor" href="#从浏览器地址栏输入一个网址-看到整个网页-发生了什么" aria-hidden="true">#</a> 从浏览器地址栏输入一个网址，看到整个网页，发生了什么？</h3><ol><li>输入www.baidu.com网址, DNS解析(域名映射的过程), 将域名转换成ip地址 (计算机在网络中的标识)</li><li>根据ip地址, 就可以找到服务器, 尝试建立TCP连接, 三次握手</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>三次握手: 一次发起连接, 两次 =&gt; 双方确认
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>发起 http 请求, 服务器端做出响应, 响应index.html</li><li>浏览器解析 index.html, 加载其他的一些资源 图片, js等，会继续发出N个二次请求。</li><li>浏览器得到所有的资源后，浏览器完成渲染</li><li>http服务结束, 断开TCP连接, 四次挥手(客气挽留)</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(1) A我要撤了, 我要断开连接 
(2) B你先等等, 我看看, 还有没有没发完的数据  (A就在等着)
    ...
(3) B检查完, 确实没有什么额外的数据要传输了, 跟A说, 你撤吧, 你断开连接吧
(4) A: 好的, 那我走了 (A准备要断开连接了)
    B收到A的确认关闭的消息后, B就会直接断开, 而A还会再等一等
    ...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="tcp-三次握手理解-双方确认" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手理解-双方确认" aria-hidden="true">#</a> TCP 三次握手理解 (双方确认)：</h3><p>建立连接 =&gt; 三次握手 (双方确认) (1) 服务器啊, 我是浏览器, 我要和你建立连接 (2) 服务器看到了, 好的, 那么建立连接吧, 我准备好了, 你确定吗? (3) 浏览器: 是的, 我确定! 连接就建立成功，三次握手 = 连接的发起 + 双方的确认</p><hr><h3 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>断开连接 =&gt; 四次挥手 (客气挽留)
(1) 一方A发起断开连接的消息
(2) 另一方B会确认收到断开的需求, 但是会要求等一等, 确认是否数据传输完毕
(3) B当确认完之后, 确实数据都传完了, 告知A, 连接可以断开了
(4) A确认收到消息, 告知B, 我要走了

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="什么是https-为什么https安全" tabindex="-1"><a class="header-anchor" href="#什么是https-为什么https安全" aria-hidden="true">#</a> 什么是https，为什么https安全：</h3><p>http是明文传输，传输的所有内容（登录的用户名和密码），都会被中间的代理商（无论是合法还是非法）获取到。 https = http + tls/ssl，传输的内容是加密传输的。只有客户端和服务器可以解密成明文，中间的过程都是无法解密。</p><h3 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密" aria-hidden="true">#</a> 对称加密：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一个密钥，即负责加密，也负责解密。
浏览器访问服务器，服务器端生成密钥，并传递给浏览器。
浏览器和服务器，通过个密钥来加密和解密信息。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非对称加密" tabindex="-1"><a class="header-anchor" href="#非对称加密" aria-hidden="true">#</a> 非对称加密：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>生成一对密钥，一个公钥，一个私钥。
- 公钥加密的信息，只有私钥能解密
- 私钥加密的信息，只有公钥能解密

浏览器访问服务端，服务端生成公钥、私钥，并把公钥传递给浏览器
浏览器生成一个 key（随机字符串），并用公钥加密，传递给服务端
服务端用私钥解密 key 。这样浏览器和服务端，就都得到了 key ，而且 key 还是加密传输的
然后，浏览器和服务端使用 key 为密钥，做对称加密传输

如果公钥和key都被劫持了，黑客能解密吗？
答：不能，因为要解密key，需要使用私钥，私钥只在服务端有，没有传输。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="证书" tabindex="-1"><a class="header-anchor" href="#证书" aria-hidden="true">#</a> 证书：</h3><p>公钥劫持了，没什么用。如果中间人把公钥替换了，替换成中间人这个公钥（当然中间人有自己的私钥），你的所有请求都可以被他劫持到，就都可以解密了。这叫“中间人攻击”。</p><p>这个问题，不好不从技术解决，从标准规范上解决----&gt;CA证书</p><ul><li>这个证书由第三方正规机构颁发（可以去阿里云申请，但是花钱）</li><li>证书：公钥，域名，申请人的信息，过期时间等</li><li>浏览器识别到正规的证书，才使用。否则会交给用户选择。</li></ul><hr><h3 id="get请求和post请求的区别" tabindex="-1"><a class="header-anchor" href="#get请求和post请求的区别" aria-hidden="true">#</a> get请求和post请求的区别</h3><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1）主要用于从服务器获取资源
2）可以把参数放到url中传递给服务器
3）传递的数据类型只允许ASCII字符
4）GET相对不安全
5）GET请求传递给服务器的数据大小是有限制的，不同的浏览器限制是不一样的

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> post:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1）主要用于把资源扔给服务器
2）把参数放到请求体中传递
3）传递的数据类型是无限制
4）POST相对安全
6）POST请求，理论上传递给服务器的数据大小是不限制

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="重绘-repaint-和重排-回流reflow-是什么" tabindex="-1"><a class="header-anchor" href="#重绘-repaint-和重排-回流reflow-是什么" aria-hidden="true">#</a> 重绘(repaint)和重排(回流reflow)是什么？</h3><h3 id="重排-重新计算位置和大小" tabindex="-1"><a class="header-anchor" href="#重排-重新计算位置和大小" aria-hidden="true">#</a> 重排: 重新计算位置和大小</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重排时更明显的一种改变，可以理解为渲染树需要重新计算。常见的触发重排的操作：
  1)DOM元素的几何属性变化
  2)DOM树的结构变化（例如节点的增减、移动）
  3)获取或操作某些属性（例如offsetTop，offsetLeft，offsetHeight，offsetWidth，clientWidth，clientHeight等）
  4)调整浏览器窗口大小

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重绘" tabindex="-1"><a class="header-anchor" href="#重绘" aria-hidden="true">#</a> 重绘：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重绘是一个元素外观的改变所触发的浏览器行为（例如改变visibility，outline，background等属性），浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两者的区别" tabindex="-1"><a class="header-anchor" href="#两者的区别" aria-hidden="true">#</a> 两者的区别:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1)重排一定会引发重绘, 重绘不会带来重新布局，并不一定伴随着重排。
2)在实践中，应该尽量减少重排次数和缩小重排的影响范围。有以下几种方法：
  - 将多次改变样式属性的操作合并成一次操作 
  - 将需要多次重排的元素，position属性设为absolute或fixed，使其脱离文档流，这样它的变化就不会影响到其他元素
  - 在内存中多次操作节点，完成后再添加到文档中去
  - 如果要对一个元素进行复杂的操作，可以将其display属性设置为none使其隐藏，待操作完成后再显示
  - 在需要经常获取那些引起浏览器重排的属性值时，要缓存到变量

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="cookie和session以及token的区别" tabindex="-1"><a class="header-anchor" href="#cookie和session以及token的区别" aria-hidden="true">#</a> cookie和session以及token的区别？</h3><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>服务器给浏览器种植的cookie。存储的是数据，数据存储在浏览器端。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>也是存储数据，只不过数据是存储在服务器。
session是基于cookie。服务器会给浏览器种植一个session_id的东西。session_id就是在cookie中存储着。
cookie和session同样可以进行身份鉴权。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>身份认证成功后，服务器给客户端响应的一个字符串，后面每次请求，都可以在请求头中带上这个字符串。服务端会验证token。

如果项目是前后端分离的，通常会使用jwt+token进行鉴权。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,96),l=[s];function r(t,c){return i(),n("div",null,l)}const u=e(d,[["render",r],["__file","node.html.vue"]]);export{u as default};
