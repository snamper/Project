// Type definitions for Angular v2.0.0-local_sha.2a2f9a9
// Project: http://angular.io/
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// ***********************************************************
// This file is generated by the Angular build process.
// Please do not create manual edits or send pull requests
// modifying this file.
// ***********************************************************

// angular2/platform/browser depends transitively on these libraries.
// If you don't have them installed you can install them using TSD
// https://github.com/DefinitelyTyped/tsd

///<reference path="../core.d.ts"/>



declare module browser {  
  /**
   * Marks a function or method as an Angular 2 entrypoint. Only necessary in Dart code.
   * 
   * The optional `name` parameter will be reflected in logs when the entry point is processed.
   * 
   * See [the wiki][] for detailed documentation.
   * [the wiki]: https://github.com/angular/angular/wiki/Angular-2-Dart-Transformer#entry_points
   * 
   * ## Example
   * 
   * ```
   * @AngularEntrypoint("name-for-debug")
   * void main() {
   *   bootstrap(MyComponent);
   * }
   * ```
   */
  class AngularEntrypoint {
    
    constructor(name?: String);
    
    name: String;
    
  }

    
  /**
   * A set of providers to initialize the Angular platform in a web browser.
   * 
   * Used automatically by `bootstrap`, or can be passed to {@link platform}.
   */
  let BROWSER_PROVIDERS: Array<any /*core.Type | Provider | any[]*/>;
  

    
  /**
   * Use {@link ELEMENT_PROBE_PROVIDERS}.
   * 
   * @deprecated
   */
  let ELEMENT_PROBE_BINDINGS: any;
  

    
  /**
   * Providers which support debugging Angular applications (e.g. via `ng.probe`).
   * 
   * ## Example
   * 
   * {@example platform/dom/debug/ts/debug_element_view_listener/providers.ts region='providers'}
   */
  let ELEMENT_PROBE_PROVIDERS: any[];
  

    
  /**
   * Returns a {@link core.DebugElement} for the given native DOM element, or
   * null if the given native element does not have an Angular view associated
   * with it.
   */
  function inspectNativeElement(element: any): core.DebugElement;
  

    
  /**
   * A `DomAdapter` powered by full browser DOM APIs.
   */
  class BrowserDomAdapter extends GenericBrowserDomAdapter {
    
    static makeCurrent(): void;
    
    parse(templateHtml: string): void;
    
    hasProperty(element: any, name: string): boolean;
    
    setProperty(el: /*element*/ any, name: string, value: any): void;
    
    getProperty(el: /*element*/ any, name: string): any;
    
    invoke(el: /*element*/ any, methodName: string, args: any[]): any;
    
    logError(error: any): void;
    
    log(error: any): void;
    
    logGroup(error: any): void;
    
    logGroupEnd(): void;
    
    attrToPropMap: any;
    
    query(selector: string): any;
    
    querySelector(el: any, selector: string): HTMLElement;
    
    querySelectorAll(el: any, selector: string): any[];
    
    on(el: any, evt: any, listener: any): void;
    
    onAndCancel(el: any, evt: any, listener: any): Function;
    
    dispatchEvent(el: any, evt: any): void;
    
    createMouseEvent(eventType: string): MouseEvent;
    
    createEvent(eventType: any): Event;
    
    preventDefault(evt: Event): void;
    
    isPrevented(evt: Event): boolean;
    
    getInnerHTML(el: any): string;
    
    getOuterHTML(el: any): string;
    
    nodeName(node: Node): string;
    
    nodeValue(node: Node): string;
    
    type(node: HTMLInputElement): string;
    
    content(node: Node): Node;
    
    firstChild(el: any): Node;
    
    nextSibling(el: any): Node;
    
    parentElement(el: any): Node;
    
    childNodes(el: any): Node[];
    
    childNodesAsList(el: any): any[];
    
    clearNodes(el: any): void;
    
    appendChild(el: any, node: any): void;
    
    removeChild(el: any, node: any): void;
    
    replaceChild(el: Node, newChild: any, oldChild: any): void;
    
    remove(node: any): Node;
    
    insertBefore(el: any, node: any): void;
    
    insertAllBefore(el: any, nodes: any): void;
    
    insertAfter(el: any, node: any): void;
    
    setInnerHTML(el: any, value: any): void;
    
    getText(el: any): string;
    
    setText(el: any, value: string): void;
    
    getValue(el: any): string;
    
    setValue(el: any, value: string): void;
    
    getChecked(el: any): boolean;
    
    setChecked(el: any, value: boolean): void;
    
    createComment(text: string): Comment;
    
    createTemplate(html: any): HTMLElement;
    
    createElement(tagName: any, doc?: any): HTMLElement;
    
    createElementNS(ns: any, tagName: any, doc?: any): Element;
    
    createTextNode(text: string, doc?: any): Text;
    
    createScriptTag(attrName: string, attrValue: string, doc?: any): HTMLScriptElement;
    
    createStyleElement(css: string, doc?: any): HTMLStyleElement;
    
    createShadowRoot(el: HTMLElement): DocumentFragment;
    
    getShadowRoot(el: HTMLElement): DocumentFragment;
    
    getHost(el: HTMLElement): HTMLElement;
    
    clone(node: Node): Node;
    
    getElementsByClassName(element: any, name: string): HTMLElement[];
    
    getElementsByTagName(element: any, name: string): HTMLElement[];
    
    classList(element: any): any[];
    
    addClass(element: any, className: string): void;
    
    removeClass(element: any, className: string): void;
    
    hasClass(element: any, className: string): boolean;
    
    setStyle(element: any, styleName: string, styleValue: string): void;
    
    removeStyle(element: any, stylename: string): void;
    
    getStyle(element: any, stylename: string): string;
    
    hasStyle(element: any, styleName: string, styleValue?: string): boolean;
    
    tagName(element: any): string;
    
    attributeMap(element: any): Map<string, string>;
    
    hasAttribute(element: any, attribute: string): boolean;
    
    getAttribute(element: any, attribute: string): string;
    
    setAttribute(element: any, name: string, value: string): void;
    
    setAttributeNS(element: any, ns: string, name: string, value: string): void;
    
    removeAttribute(element: any, attribute: string): void;
    
    templateAwareRoot(el: any): any;
    
    createHtmlDocument(): HTMLDocument;
    
    defaultDoc(): HTMLDocument;
    
    getBoundingClientRect(el: any): any;
    
    getTitle(): string;
    
    setTitle(newTitle: string): void;
    
    elementMatches(n: any, selector: string): boolean;
    
    isTemplateElement(el: any): boolean;
    
    isTextNode(node: Node): boolean;
    
    isCommentNode(node: Node): boolean;
    
    isElementNode(node: Node): boolean;
    
    hasShadowRoot(node: any): boolean;
    
    isShadowRoot(node: any): boolean;
    
    importIntoDoc(node: Node): any;
    
    adoptNode(node: Node): any;
    
    getHref(el: Element): string;
    
    getEventKey(event: any): string;
    
    getGlobalEventTarget(target: string): EventTarget;
    
    getHistory(): History;
    
    getLocation(): Location;
    
    getBaseHref(): string;
    
    resetBaseElement(): void;
    
    getUserAgent(): string;
    
    setData(element: any, name: string, value: string): void;
    
    getData(element: any, name: string): string;
    
    getComputedStyle(element: any): any;
    
    setGlobalVar(path: string, value: any): void;
    
    requestAnimationFrame(callback: any): number;
    
    cancelAnimationFrame(id: number): void;
    
    performanceNow(): number;
    
  }

    
  /**
   * Predicates for use with {@link core.DebugElement}'s query functions.
   */
  class By {
    
    /**
     * Match all elements.
     * 
     * ## Example
     * 
     * {@example platform/dom/debug/ts/by/by.ts region='by_all'}
     */
    static all(): Predicate<core.DebugElement>;
    
    /**
     * Match elements by the given CSS selector.
     * 
     * ## Example
     * 
     * {@example platform/dom/debug/ts/by/by.ts region='by_css'}
     */
    static css(selector: string): Predicate<core.DebugElement>;
    
    /**
     * Match elements that have the given directive present.
     * 
     * ## Example
     * 
     * {@example platform/dom/debug/ts/by/by.ts region='by_directive'}
     */
    static directive(type: core.Type): Predicate<core.DebugElement>;
    
  }

    
  /**
   * A service that can be used to get and set the title of a current HTML document.
   * 
   * Since an Angular 2 application can't be bootstrapped on the entire HTML document (`<html>` tag)
   * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
   * (representing the `<title>` tag). Instead, this service can be used to set and get the current
   * title value.
   */
  class Title {
    
    /**
     * Get the title of the current HTML document.
     * @returns {string}
     */
    getTitle(): string;
    
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */
    setTitle(newTitle: string): void;
    
  }

    
  /**
   * A DI Token representing the main rendering context. In a browser this is the DOM Document.
   * 
   * Note: Document might not be available in the Application Context when Application and Rendering
   * Contexts are not the same (e.g. when running the application into a Web Worker).
   */
  let DOCUMENT: core.OpaqueToken;
  

    
  /**
   * Enabled Angular 2 debug tools that are accessible via your browser's
   * developer console.
   * 
   * Usage:
   * 
   * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
   * 1. core.Type `ng.` (usually the console will show auto-complete suggestion)
   * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
   *    then hit Enter.
   */
  function enableDebugTools(ref: core.ComponentRef): void;
  

    
  /**
   * Disables Angular 2 tools.
   */
  function disableDebugTools(): void;
  

    
  /**
   * An array of providers that should be passed into `application()` when bootstrapping a component.
   */
  let BROWSER_APP_PROVIDERS: Array<any /*core.Type | Provider | any[]*/>;
  

    
  /**
   * Bootstrapping for Angular applications.
   * 
   * You instantiate an Angular application by explicitly specifying a component to use
   * as the root component for your application via the `bootstrap()` method.
   * 
   * ## Simple Example
   * 
   * Assuming this `index.html`:
   * 
   * ```html
   * <html>
   *   <!-- load Angular script tags here. -->
   *   <body>
   *     <my-app>loading...</my-app>
   *   </body>
   * </html>
   * ```
   * 
   * An application is bootstrapped inside an existing browser DOM, typically `index.html`.
   * Unlike Angular 1, Angular 2 does not compile/process providers in `index.html`. This is
   * mainly for security reasons, as well as architectural changes in Angular 2. This means
   * that `index.html` can safely be processed using server-side technologies such as
   * providers. Bindings can thus use double-curly `{{ syntax }}` without collision from
   * Angular 2 component double-curly `{{ syntax }}`.
   * 
   * We can use this script code:
   * 
   * {@example core/ts/bootstrap/bootstrap.ts region='bootstrap'}
   * 
   * When the app developer invokes `bootstrap()` with the root component `MyApp` as its
   * argument, Angular performs the following tasks:
   * 
   *  1. It uses the component's `selector` property to locate the DOM element which needs
   *     to be upgraded into the angular component.
   *  2. It creates a new child injector (from the platform injector). Optionally, you can
   *     also override the injector configuration for an app by invoking `bootstrap` with the
   *     `componentInjectableBindings` argument.
   *  3. It creates a new `Zone` and connects it to the angular application's change detection
   *     domain instance.
   *  4. It creates an emulated or shadow DOM on the selected component's host element and loads the
   *     template into it.
   *  5. It instantiates the specified component.
   *  6. Finally, Angular performs change detection to apply the initial data providers for the
   *     application.
   * 
   * 
   * ## Bootstrapping Multiple Applications
   * 
   * When working within a browser window, there are many singleton resources: cookies, title,
   * location, and others. Angular services that represent these resources must likewise be
   * shared across all Angular applications that occupy the same browser window. For this
   * reason, Angular creates exactly one global platform object which stores all shared
   * services, and each angular application injector has the platform injector as its parent.
   * 
   * Each application has its own private injector as well. When there are multiple
   * applications on a page, Angular treats each application injector's services as private
   * to that application.
   * 
   * ## API
   * 
   * - `appComponentType`: The root component which should act as the application. This is
   *   a reference to a `core.Type` which is annotated with `@Component(...)`.
   * - `customProviders`: An additional set of providers that can be added to the
   *   app injector to override default injection behavior.
   * 
   * Returns a `Promise` of {@link core.ComponentRef}.
   */
  function bootstrap(appComponentType: core.Type, customProviders?: Array<any /*core.Type | Provider | any[]*/>): Promise<core.ComponentRef>;
  

  
}

declare module "angular2/platform/browser" {
  export = browser;
}


