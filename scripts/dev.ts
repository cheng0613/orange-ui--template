#!/usr/bin/env node
import { execSync } from 'child_process'

console.log('🛠️  Starting development server...')

try {
  execSync('pnpm --filter @ofe/play dev', { stdio: 'inherit' })
} catch (error) {
  console.error('❌ Failed to start development server')
  process.exit(1)
}