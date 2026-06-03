# CLAUDE.md

## Project Context

This is an Angular v20+ application written in TypeScript.

Primary goals:

* Maintainable architecture
* Accessibility-first implementation
* Strong typing
* High performance
* Modern Angular patterns
* Scalable feature organization

---

## TypeScript Best Practices

* Enable and respect strict type checking.
* Prefer type inference when the type is obvious.
* Avoid `any`.
* Use `unknown` when a type is uncertain.
* Prefer readonly data structures when appropriate.
* Favor pure functions and predictable state transformations.

---

## Angular Best Practices

* Use standalone components.
* Do not add `standalone: true` to decorators (Angular v20+ default).
* Use signals for component state.
* Use `computed()` for derived values.
* Use `inject()` instead of constructor injection.
* Implement lazy loading for feature routes.
* Use `ChangeDetectionStrategy.OnPush` for all components.
* Prefer composition over inheritance.
* Keep components focused on a single responsibility.

### Component Rules

* Use `input()` and `output()` functions.
* Prefer inline templates for small components.
* Use external template/style files for larger components.
* Reference external templates and styles using relative paths.
* Do not use `@HostBinding`.
* Do not use `@HostListener`.
* Define host bindings using the `host` property.

Example:

```ts
host: {
  '[attr.aria-expanded]': 'expanded()',
  '(click)': 'toggle()'
}
```

---

## State Management

* Use signals for local state.
* Use `computed()` for derived state.
* Use `effect()` only when side effects are required.
* Never mutate signal state directly.
* Use `set()` or `update()`.

Preferred:

```ts
items.update(current => [...current, item]);
```

Avoid:

```ts
items.mutate(list => list.push(item));
```

---

## Templates

* Keep templates simple.
* Move complex logic into computed signals.
* Use Angular control flow syntax.

Prefer:

```html
@if (user()) {
  ...
}
```

```html
@for (item of items(); track item.id) {
  ...
}
```

Avoid:

```html
*ngIf
*ngFor
*ngSwitch
```

* Use the async pipe for observables.
* Do not assume browser globals exist in templates.
* Do not call expensive methods from templates.

### Styling

* Do not use `ngClass`.
* Use class bindings.

Prefer:

```html
<div [class.active]="isActive()"></div>
```

* Do not use `ngStyle`.
* Use style bindings.

Prefer:

```html
<div [style.width.px]="width()"></div>
```

---

## Forms

* Prefer Reactive Forms.
* Use typed forms.
* Avoid Template-driven Forms.
* Validate at both UI and business logic layers.

---

## Services

* Follow single-responsibility principles.
* Use:

```ts
providedIn: 'root'
```

for singleton services.

* Use `inject()` for dependencies.
* Keep services stateless when possible.

---

## Images

* Use NgOptimizedImage for static images.
* Do not use NgOptimizedImage for inline base64 images.

---

## Accessibility

All code must:

* Pass AXE validation.
* Meet WCAG 2.1 AA requirements.
* Support keyboard navigation.
* Preserve visible focus indicators.
* Use semantic HTML whenever possible.
* Provide accessible names for controls.
* Use proper ARIA attributes only when native semantics are insufficient.
* Ensure sufficient color contrast.

---

## Performance

* Avoid unnecessary change detection.
* Prefer signals over RxJS for local UI state.
* Use lazy-loaded routes.
* Track items in `@for`.
* Optimize image loading.
* Avoid unnecessary re-renders.

---

## Folder Structure

Preferred feature-based architecture:

```text
src/app/
├── core/
├── shared/
├── features/
│   ├── users/
│   ├── dashboard/
│   └── settings/
└── layouts/
```

---

## Before Completing Any Task

Always:

1. Verify TypeScript types.
2. Verify Angular best practices.
3. Verify accessibility requirements.
4. Verify no use of `any`.
5. Verify no use of deprecated Angular patterns.
6. Verify build succeeds.
7. Verify lint passes.
8. Verify tests pass when applicable.

When generating code, explain architectural decisions briefly and keep implementations production-ready.
