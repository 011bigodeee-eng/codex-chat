'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
export default function Structure() {
  const mount = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = mount.current;
    if (!host || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); } catch { return; }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(5, 3, 7); camera.lookAt(0, 0, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    host.appendChild(renderer.domElement);
    const group = new THREE.Group();
    const material = new THREE.LineBasicMaterial({ color: 0xbda77a, transparent: true, opacity: 0.65 });
    const geometries: THREE.EdgesGeometry[] = [];
    for (let i = 0; i < 4; i++) {
      const box = new THREE.BoxGeometry(2.7 - i * .4, .8, 2.1 - i * .2);
      const edges = new THREE.EdgesGeometry(box); box.dispose(); geometries.push(edges);
      const line = new THREE.LineSegments(edges, material); line.position.y = i * .65 - 1; group.add(line);
    }
    scene.add(group);
    const resize = () => { const w = host.clientWidth, h = host.clientHeight; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); };
    const observer = new ResizeObserver(resize); observer.observe(host); resize();
    let frame = 0;
    const render = (time: number) => { group.rotation.y = time * .00012; renderer.render(scene, camera); frame = requestAnimationFrame(render); };
    frame = requestAnimationFrame(render);
    const lost = (event: Event) => { event.preventDefault(); cancelAnimationFrame(frame); };
    renderer.domElement.addEventListener('webglcontextlost', lost);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); renderer.domElement.removeEventListener('webglcontextlost', lost); geometries.forEach(g => g.dispose()); material.dispose(); renderer.dispose(); renderer.domElement.remove(); };
  }, []);
  return <div ref={mount} className="structure" aria-hidden="true"><div className="structure-fallback">◇</div></div>;
}
