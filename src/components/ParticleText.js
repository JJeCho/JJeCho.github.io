import React, { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

extend({ SphereGeometry: THREE.SphereGeometry });

const useLoaderWithPromise = (Loader, url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    new Loader().load(url, setData);
  }, [Loader, url]);
  return data;
};

const Particles = ({ count, font, particleImg }) => {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { camera } = useThree();

  const positions = useMemo(() => {
    if (!font) return [];

    const text1 = 'Hello!';
    const text2 = 'Welcome to my website';

    const shapes1 = font.generateShapes(text1, 10);
    const shapes2 = font.generateShapes(text2, 10);

    const geometry1 = new THREE.ShapeGeometry(shapes1);
    const geometry2 = new THREE.ShapeGeometry(shapes2);

    geometry1.computeBoundingBox();
    geometry2.computeBoundingBox();

    const xMid1 = -0.5 * (geometry1.boundingBox.max.x - geometry1.boundingBox.min.x);
    const yMid1 = 0.5 * (geometry1.boundingBox.max.y - geometry1.boundingBox.min.y);
    geometry1.translate(xMid1, yMid1, 0);

    const xMid2 = -0.5 * (geometry2.boundingBox.max.x - geometry2.boundingBox.min.x);
    const yMid2 = yMid1 - (geometry1.boundingBox.max.y - geometry1.boundingBox.min.y); // Adjust y position
    geometry2.translate(xMid2, yMid2, 0);

    const points = [];
      shapes1.forEach((shape) => {
        shape.getSpacedPoints(50).forEach((point) => {
          points.push(new THREE.Vector3(point.x - 25, point.y+ 25, 0));
        });
        if (shape.holes) {
          shape.holes.forEach((hole) => {
            hole.getSpacedPoints(50).forEach((point) => {
              points.push(new THREE.Vector3(point.x - 25, point.y + 25, 0));
            });
          });
        }
      });
      shapes2.forEach((shape) => {
        shape.getSpacedPoints(50).forEach((point) => {
          points.push(new THREE.Vector3(point.x - 75, point.y, 0));
        });
        if (shape.holes) {
          shape.holes.forEach((hole) => {
            hole.getSpacedPoints(50).forEach((point) => {
              points.push(new THREE.Vector3(point.x - 75, point.y , 0));
            });
          });
        }
      });

    return new Float32Array(points.flatMap((point) => [point.x, point.y, point.z]));
  }, [font]);

  const particles = useMemo(() => {
    const positionsArray = new Float32Array(count * 3);
    if (positions.length) {
      for (let i = 0; i < count; i++) {
        const index = (i * 3) % positions.length;
        positionsArray.set(positions.slice(index, index + 3), i * 3);
      }
    }
    return positionsArray;
  }, [count, positions]);

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = ix + 1;
      const iz = ix + 2;

      const tx = particles[ix];
      const ty = particles[iy];
      const tz = particles[iz];

      const dx = particles[ix] - mouse.current.x * 10;
      const dy = particles[iy] - mouse.current.y * 10;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const mouseInfluenceRadius = 1;
      const mouseForce = Math.max(1 - dist / mouseInfluenceRadius, 0) * 0.05;

      const attractionForce = 0.01;
      particles[ix] += Math.sin(time + i) * 0.01 + dx * mouseForce + (tx - particles[ix]) * attractionForce;
      particles[iy] += Math.cos(time + i) * 0.01 + dy * mouseForce + (ty - particles[iy]) * attractionForce;
      particles[iz] += Math.sin(time + i) * 0.01 + (tz - particles[iz]) * attractionForce;

      dummy.position.set(particles[ix], particles[iy], particles[iz]);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial color="white" />
    </instancedMesh>
  );
};

const ParticleText = () => {
  const font = useLoaderWithPromise(FontLoader, 'https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json');
  const particleImg = useLoaderWithPromise(THREE.TextureLoader, 'https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png');

  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 75 }} style={{ height: '100vh', background: 'black' }}>
      <ambientLight />
      {font && particleImg && <Particles count={10000} font={font} particleImg={particleImg} />}
      <OrbitControls />
    </Canvas>
  );
};

export default ParticleText;
