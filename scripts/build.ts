#!/usr/bin/env node
import { execSync } from 'child_process'

const packages = [
  '@ofe/ui'
]

console.log('🚀 Building OFE UI packages...')

packages.forEach(pkg => {
  console.log(`📦 Building ${pkg}...`)
  try {
    execSync(`pnpm --filter ${pkg} build`, { stdio: 'inherit' })
    console.log(`✅ ${pkg} built successfully`)
  } catch (error) {
    console.error(`❌ Failed to build ${pkg}`)
    process.exit(1)
  }
})

console.log('🎉 All packages built successfully!')